import { registerApplication, start } from "single-spa";
import * as singleSpa from 'single-spa';
import {
  constructApplications,
  constructRoutes,
  constructLayoutEngine,
} from "single-spa-layout";
import microfrontendLayout from "./microfrontend-layout.html";

/* const routes = constructRoutes(microfrontendLayout);
const applications = constructApplications({
  routes,
  loadApp({ name }) {
    return System.import(name);
  },
});
const layoutEngine = constructLayoutEngine({ routes, applications });

applications.forEach(registerApplication);
layoutEngine.activate();

const appNames = singleSpa.getAppNames();
console.log(appNames);  */

registerApplication({
  name: "@christian/spa-navbar",
  app: () => System.import('@christian/spa-navbar'),
  activeWhen: ["/"]
})

registerApplication({
  name: "@christian/spa-faq",
  app: () => System.import('@christian/spa-faq'),
  activeWhen: "/faq"
})
registerApplication({
  name: "@christian/spa-auth",
  app: () => System.import('@christian/spa-auth'),
  activeWhen: "/sign-in",
})

registerApplication({
  name: "@christian/spa-about-us",
  app: () => System.import('@christian/spa-about-us'),
  activeWhen: "/about-us"
})



start();
