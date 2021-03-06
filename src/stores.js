import { writable } from 'svelte/store';
import Geocoder from "./Geocoder";

export const crimesStore = writable([]);

export const startUpdating = async () => {
  const values = await getCrimes();
  crimesStore.update(arr => {
    return values;
  });

  setInterval(async () => {
    const values = await getCrimes();
    console.log('updating', values);
    crimesStore.update(arr => {
      return values;
    });
  }, 60000);
}

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