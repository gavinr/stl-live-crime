<script>
  import { onMount } from "svelte";
  import Geocoder from "./Geocoder";
  export let name;
  export let values;

  const getSize = date => {
    let difference = Math.abs(new Date() - new Date(date));
    let retSize = 1;
    if (difference < 3600000) {
      // 1 hour
      retSize = 3;
    } else if (difference < 7200000) {
      // 2 hours
      retSize = 2;
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
        console.log("location:", location);
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

  require(["esri/Map", "esri/views/MapView"], function(Map, MapView) {
    const map = new Map({
      basemap: "streets"
    });
    const view = new MapView({
      container: "viewDiv",
      map: map,
      zoom: 8,
      center: [-90, 38] // longitude, latitude
    });
    // view.watch("center", center => {
    //   const { latitude, longitude } = center;
    //   centerText = `Lat: ${latitude.toFixed(2)} | Lon: ${longitude.toFixed(2)}`;
    // });
  });

  onMount(async function() {
    values = await getCrimes();

    setInterval(async () => {
      values = await getCrimes();
    }, 30000);
  });
</script>

<style>
  .left {
    float: left;
    width: 200px;
  }
  .left .card {
    margin-bottom: 20px;
  }
  table td {
    padding: 5px;
  }
  #viewDiv {
    padding: 0;
    margin: 0;
    height: 400px;
    width: 400px;
  }
</style>

<h1>{name}</h1>

<div class="left">
  {#each values as crime}
    <div class="card">
      {crime.offense}
      <br />
      {crime.date}
      <br />
      {crime.address} ({crime.lat}, {crime.lon})
    </div>
  {/each}
</div>
<div id="viewDiv" />
