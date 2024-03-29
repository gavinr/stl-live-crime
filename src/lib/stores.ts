import { writable } from 'svelte/store';

import Geocoder from "./Geocoder";

import type { Crime } from './types';

export const crimesStore = writable<Crime[]>([]);


export const startUpdating = async () => {
    const values = await getCrimes();
    crimesStore.update(arr => {
        return values;
    });

    setInterval(async () => {
        const values = await getCrimes();
        crimesStore.update(arr => {
            return values;
        });
    }, 60000);
}

const getSize = date => {
    let difference = Math.abs((new Date()).getTime() - (new Date(date)).getTime());
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
    const res = Array.prototype.slice.call(context.querySelectorAll(query));
    return res;
};

const getCrime = async (row): Promise<Crime> => {
    const [date, id, address, offense] = querySelectorAllFunction(
        "td",
        row
    ).map(cell => {
        return cell.querySelector("font").innerHTML;
    });

    const fullAddress =
        address.replace("XX ", "00 ").replace(" / ", " and ") +
        ", St. Louis, MO, USA";

    const location = await Geocoder(fullAddress);
    let lat = false;
    let lon = false;
    if (location.locations.length > 0) {
        if (location.locations[0].feature.attributes.Score > 90.0) {
            lat = location.locations[0].feature.geometry.y;
            lon = location.locations[0].feature.geometry.x;
        }
    }

    const c: Crime = {
        date: date,
        id: id,
        address: fullAddress,
        offense: offense,
        size: getSize(date),
        lat: lat,
        lon: lon
    };

    return c;
};

const getCrimes = async (): Promise<Crime[]> => {

    // this is a cache to
    // http://www.slmpd.org/cfs.aspx
    const response = await fetch(
        "https://muddy-glitter-47c1.alligator.workers.dev"
    );
    const text = await response.text();

    // Parse the result from the request into a DOM document so we can parse through it and turn it into JSON
    var doc = new DOMParser().parseFromString(text, "text/html");

    const rows = querySelectorAllFunction("table tbody tr", doc);
    const rowsPromises: Promise<Crime>[] = rows.map(getCrime);
    const values = Promise.all(rowsPromises);

    return values;
};