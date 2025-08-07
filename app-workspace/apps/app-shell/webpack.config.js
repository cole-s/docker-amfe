const ModuleFederationPlugin = require("@angular-architects/module-federation/webpack");

module.exports = ModuleFederationPlugin({
  name: "shell",
  remotes: {
    "app-one": "app_one@http://localhost:4201/remoteEntry.js",
    "app-two": "app_two@http://localhost:4202/remoteEntry.js",
  },
  shared: {
    "@angular/core": { singleton: true, strictVersion: true },
    "@angular/common": { singleton: true, strictVersion: true },
    "@angular/router": { singleton: true, strictVersion: true },
    // Share your UI library
    "@app-workspace/ui": { singleton: true, strictVersion: true },
  },
});