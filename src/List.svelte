<script>
  export let values;
</script>

<style>
  .card {
    margin-bottom: 20px;
  }
</style>

{#each values as crime}
  <div class="card">
    {crime.offense}
    <br />
    {crime.date}
    <br />
    {crime.address} ({crime.lat}, {crime.lon})
  </div>
{/each}