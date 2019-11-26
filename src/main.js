import App from "./App.svelte";

document.body.style.padding = 0;
document.body.style.margin = 0;

console.log(window.innerWidth)

const app = new App({
  target: document.body
});

export default app;
