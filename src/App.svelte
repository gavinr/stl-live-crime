<script>
  import { onMount } from "svelte";
  import Map from "./Map.svelte";
  import List from "./List.svelte";
  import { crimesStore, startUpdating } from './stores';
  export let name;
  export let selectedCrime = false;

  onMount(async function() {
    startUpdating();
  });

  function listClickHandler(evt) {
    if (selectedCrime == evt.detail || evt.detail === false) {
      selectedCrime = false; // toggle
    } else {
      selectedCrime = evt.detail;
    }
  }
</script>

<style>
  header {
    grid-column: 1 / span 5;
    font-size: 40px;
    padding: 10px;
    overflow: hidden;
  }

  aside {
    grid-column: span 2;
    overflow-y: scroll;
  }

  @media (max-width: 700px) {
    aside {
      grid-column: 1 / span 5;
    }
  }
</style>

<header>
  {name}
</header>
<Map {selectedCrime} on:selected={listClickHandler} />
<aside id="sidebar">
  <List {selectedCrime} on:click={listClickHandler} />
</aside>
