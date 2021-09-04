import App from './App.svelte'

const app = new App({
  target: document.getElementById('app'),
  props: {
    name: 'St. Louis Live Crime'
  }
})

export default app
