<script>
  export let values;
  export let selectedCrime;
  import { createEventDispatcher } from 'svelte';
  import { crimesStore } from './stores';

  const dispatch  = createEventDispatcher();

  function handleClick(evt) {
    dispatch('click', evt);
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

{#each $crimesStore as crime}
  <div class="card" class:highlight={selectedCrime && crime.id === selectedCrime.id} on:click={() => handleClick(crime)} >
    {crime.offense}
    <br />
    {crime.date}
    <br />
    {crime.address}
  </div>
{/each}