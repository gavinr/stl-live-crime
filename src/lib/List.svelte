<script lang="ts">
    import type { Crime } from "./types";

    import { createEventDispatcher } from "svelte";
    import { crimesStore } from "./stores";

    export let selectedCrime: Crime;

    const dispatch = createEventDispatcher();

    function handleClick(evt) {
        dispatch("click", evt);
    }
</script>

{#if $crimesStore.length > 0}
    {#each $crimesStore as crime}
        <div
            class="card"
            class:highlight={selectedCrime && crime.id === selectedCrime.id}
            on:click={() => handleClick(crime)}
        >
            {crime.offense}
            <br />
            {new Intl.DateTimeFormat("en-US", {
                hour: "numeric",
                minute: "numeric",
                second: "numeric",
            }).format(new Date(crime.date))}<br />
            {crime.address}
        </div>
    {/each}
{:else}
    Loading ...
{/if}

<style>
    .card {
        margin-bottom: 20px;
        cursor: pointer;
    }
    .card.highlight {
        font-weight: bold;
    }
</style>
