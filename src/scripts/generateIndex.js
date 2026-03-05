const fs = require("fs");
const path = require("path");

const root = "public/policies";
const outputFile = "public/policies/apps.json";

function buildIndex() {
  const apps = {};

  fs.readdirSync(root).forEach((folder) => {
    const appPath = path.join(root, folder);
    if (fs.statSync(appPath).isDirectory()) {
      const files = fs.readdirSync(appPath);
      apps[folder] = files;
    }
  });

  fs.writeFileSync(outputFile, JSON.stringify(apps, null, 2));
  console.log("Generated policies/apps.json");
}

buildIndex();