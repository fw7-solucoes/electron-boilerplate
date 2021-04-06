/* eslint-disable @typescript-eslint/no-var-requires */
// Forge Configuration
const path = require('path');
const rootDir = process.cwd();

module.exports = {
  "packagerConfig": {},
  "makers": [
    {
      "name": "@electron-forge/maker-squirrel",
      "config": {
        "name": "middleware"
      }
    },
    {
      "name": "@electron-forge/maker-zip",
      "platforms": [
        "darwin"
      ]
    },
    {
      "name": "@electron-forge/maker-deb",
      "config": {}
    },
    {
      "name": "@electron-forge/maker-rpm",
      "config": {}
    }
  ],
  "plugins": [
    [
      "@electron-forge/plugin-webpack",
      {
        "mainConfig": path.join(rootDir, "tools", "webpack", "webpack.main.js"),
        "renderer": {
          "config": path.join(rootDir, "tools", "webpack", "webpack.renderer.js"),
          "entryPoints": [
            {
              // React Hot Module Replacement (HMR)
              "rhmr": 'react-hot-loader/patch',
              "html": path.join(rootDir, "src", "index.html"),
              "js": path.join(rootDir, "src", "renderer.ts"),
              "name": "main_window"
            }
          ]
        }
      }
    ]
  ]
}
