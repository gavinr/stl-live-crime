import App from "./App.svelte";

const app = new App({
  target: document.body,
  props: {
    name: "St. Louis Live Crime",
    values: []
  }
});

export default app;
