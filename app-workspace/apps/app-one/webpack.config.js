const ModuleFederationPlugin = require("@angular-architects/module-federation/webpack");

module.exports = ModuleFederationPlugin({
  name: "app_one",
  filename: "remoteEntry.js",
  exposes: {
    "./Routes": "./apps/app-one/src/app/app.routes.ts",
    "./Component": "./apps/app-one/src/app/app.component.ts",
  },
  shared: {
    "@angular/core": { singleton: true, strictVersion: true },
    "@angular/common": { singleton: true, strictVersion: true },
    "@angular/router": { singleton: true, strictVersion: true },
    "@app-workspace/ui": { singleton: true, strictVersion: true },
  },
});