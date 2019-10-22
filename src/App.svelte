<script>
  import { onMount } from "svelte";
  import Map from "./Map.svelte";
  import List from "./List.svelte";
  import Geocoder from "./Geocoder";
  import momentOriginal from "moment";
  import moment from "moment-timezone";

  export let name;
  export let values = [];
  export let selectedCrime = false;

  const getSize = date => {
    let difference = Math.abs(new Date() - new Date(date));
    let retSize = 10;
    if (difference < 3600000) {
      // 1 hour
      retSize = 30;
    } else if (difference < 7200000) {
      // 2 hours
      retSize = 20;
    }

    return retSize;
  };

  const querySelectorAllFunction = (query, context) => {
    return Array.prototype.slice.call(context.querySelectorAll(query));
  };

  const getCrimes = async () => {
    const response = await fetch(
      "https://jsonp.afeld.me?url=http://www.slmpd.org/cfs.aspx"
    );
    const text = await response.text();

    // Parse the result from the request into a DOM document so we can parse through it and turn it into JSON
    var doc = new DOMParser().parseFromString(text, "text/html");

    const rows = querySelectorAllFunction("table tbody tr", doc);
    const values = Promise.all(
      rows.map(async row => {
        const [date, id, address, offense] = querySelectorAllFunction(
          "td",
          row
        ).map(cell => {
          // console.log("returning", cell.querySelector("font").innerHTML);
          return cell.querySelector("font").innerHTML;
        });

        const fullAddress =
          address.replace("XX ", "00 ").replace(" / ", " and ") +
          ", St. Louis, MO, USA";

        const location = await Geocoder(fullAddress);
        // console.log("location:", location);
        let lat = false;
        let lon = false;
        if (location.locations.length > 0) {
          if (location.locations[0].feature.attributes.Score > 90.0) {
            lat = location.locations[0].feature.geometry.y;
            lon = location.locations[0].feature.geometry.x;
          }
        }

        return {
          date: date,
          dateMoment: moment.tz(date, "America/Chicago"),
          id: id,
          address: fullAddress,
          offense: offense,
          size: getSize(date),
          lat: lat,
          lon: lon
        };
      })
    );

    // const location = await Geocoder(values.address);
    // console.log('location', location);
    return values;
  };

  onMount(async function() {
    values = await getCrimes();

    setInterval(async () => {
      values = await getCrimes();
    }, 500000);
  });

  function listClickHandler(evt) {
    console.log("listClickHandler", evt.detail);
    if (selectedCrime == evt.detail) {
      selectedCrime = false; // toggle
    } else {
      selectedCrime = evt.detail;
    }
  }
</script>

<style>
  .left {
    float: left;
    width: 20%;
    height: 800px;
    overflow-y: scroll;
  }
  .mapWrapper {
    width: 80%;
    float: left;
  }
</style>

<h1>{name}</h1>

<div class="left">
  <List {values} {selectedCrime} on:click={listClickHandler} />
</div>
<div class="mapWrapper">
  <Map crimes={values} {selectedCrime} />
</div>
