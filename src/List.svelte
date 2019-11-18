<script>
  export let values;
  export let selectedCrime;
  import { createEventDispatcher } from 'svelte';
  import { crimesStore } from './stores';
  import moment from "moment";
  
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
{#if $crimesStore.length > 0}
  {#each $crimesStore as crime}
    <div class="card" class:highlight={selectedCrime && crime.id === selectedCrime.id} on:click={() => handleClick(crime)} >
      {crime.offense}
      <br />
      {moment(crime.date).format('h:mm:ss a')}
      <br />
      {crime.address}
    </div>
  {/each}
{:else}
  Loading ...
{/if}