import { registerApplication, start } from "single-spa";
import {
  constructApplications,
  constructRoutes,
  constructLayoutEngine,
} from "single-spa-layout";

const routes = constructRoutes(document.querySelector("#single-spa-layout"), {
  loaders: {
    topNav: "<h1>Loading topnav</h1>",
  },
  errors: {
    topNav: "<h1>Failed to load topnav</h1>",
  },
  props: {},
});

const applications = constructApplications({
  routes,
  loadApp: ({ name }) => System.import(name),
});

const layoutEngine = constructLayoutEngine({
  routes,
  applications,
});

applications.forEach(registerApplication);

console.log("routes", routes)
console.log("applications", applications)
console.log("layoutEngine", layoutEngine)

layoutEngine.activate();
start();