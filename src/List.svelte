<script>
  export let values;
  export let selectedCrime;

  import { createEventDispatcher } from "svelte";
  import momentOriginal from "moment";
  import moment from "moment-timezone";

  const dispatch = createEventDispatcher();

  function handleClick(evt) {
    dispatch("click", evt);
  }
</script>

<style>
  .card {
    margin-bottom: 20px;
    cursor: pointer;
  }
  .card.highlight {
    font-weight: bold;
  }
</style>

{#each values as crime}
  <div
    class="card"
    class:highlight={selectedCrime && crime.id === selectedCrime.id}
    on:click={() => handleClick(crime)}>
    {crime.offense}
    <br />
    <span title={crime.date}>
      {moment().diff(crime.dateMoment, 'minutes')} minutes ago
    </span>
    <br />
    {crime.address}
  </div>
{/each}
