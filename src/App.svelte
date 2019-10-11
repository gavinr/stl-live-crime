<script>
  import { onMount } from "svelte";
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
    const values = rows.map(row => {
      const [date, id, address, offense] = querySelectorAllFunction(
        "td",
        row
      ).map(cell => {
        // console.log("returning", cell.querySelector("font").innerHTML);
        return cell.querySelector("font").innerHTML;
      });
      return {
        date: date,
        id: id,
        address:
          address.replace("XX ", "00 ").replace(" / ", " and ") +
          ", St. Louis, MO, USA",
        offense: offense,
        size: getSize(date)
      };
    });
    console.log("values", values);
    return values;
  };

  onMount(async function() {
    values = await getCrimes();

    setInterval(async () => {
      values = await getCrimes();
    }, 10000);
  });
</script>

<style>

</style>

<h1>{name}</h1>

<ul>
  {#each values as crime}
    <li>{crime.offense} - {crime.date} - {crime.address}</li>
  {/each}
</ul>
