<script lang="ts">
  import { onMount } from "svelte";
  import type { Crime } from "./lib/types";
  import EsriMapView from "./lib/EsriMapView.svelte";
  import Info from "./lib/Info.svelte";
  import List from "./lib/List.svelte";

  import { startUpdating } from "./lib/stores";

  import "./style.css";

  export let name;
  export let selectedCrime: Crime;
  export let centerMap = false;

  onMount(async function () {
    startUpdating();
  });

  function listClickHandler(evt, c) {
    if (selectedCrime == evt.detail || evt.detail === false) {
      selectedCrime = undefined; // toggle
    } else {
      centerMap = c;
      selectedCrime = evt.detail;
    }
  }
</script>

<header>
  {name}
  <span><Info {name} /></span>
</header>
<EsriMapView
  {selectedCrime}
  {centerMap}
  on:selected={(e) => {
    listClickHandler(e, false);
  }}
/>
<aside id="sidebar">
  <List
    {selectedCrime}
    on:click={(e) => {
      listClickHandler(e, true);
    }}
  />
</aside>

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
