<script>
  import { onMount } from "svelte";
  import Map from "./Map.svelte";
  import List from "./List.svelte";
  import Info from "./Info.svelte";
  import { crimesStore, startUpdating } from './stores';
  export let name;
  export let selectedCrime = false;
  export let centerMap = false;

  onMount(async function() {
    startUpdating();
  });

  function listClickHandler(evt, c) {
    if (selectedCrime == evt.detail || evt.detail === false) {
      selectedCrime = false; // toggle
    } else {
      centerMap = c;
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
  header span {
    float: right;
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
  <span><Info {name}></Info></span>
</header>
<Map {selectedCrime} {centerMap} on:selected={ (e) => {listClickHandler(e, false)} } />
<aside id="sidebar">
  <List {selectedCrime} on:click={ (e) => {listClickHandler(e, true)} } />
</aside>
