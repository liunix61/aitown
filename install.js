module.exports = {
  run: [
    // Edit this step to customize the git repository to use
    {
      method: "shell.run",
      params: {
        message: [
          "git clone https://github.com/peanutcocktail/ai-town.git app",
        ]
      }
    },
    {
      method: "shell.run",
      params: {
        conda: "node18",
        path: "app",                // Edit this to customize the path to start the shell from
        message: [
          "conda install -y -c conda-forge nodejs==18.19.0 just",
          "npm install",
        ]
      }
    },
    {
      when: "{{platform === 'darwin' && arch == 'arm64'}}",
      method: "fs.download",
      params: {
        uri: "https://github.com/get-convex/convex-backend/releases/download/precompiled-2024-04-26-560e5a3/convex-local-backend-aarch64-apple-darwin.zip",
        dir: "app"
      }
    },
    {
      when: "{{platform === 'darwin' && arch == 'arm64'}}",
      method: "shell.run",
      params: {
        message: "unzip convex-local-backend-aarch64-apple-darwin.zip",
        path: "app"
      }
    },
    {
      when: "{{platform === 'darwin' && arch == 'x64'}}",
      method: "fs.download",
      params: {
        uri: "https://github.com/get-convex/convex-backend/releases/download/precompiled-2024-04-29-5b5828c/convex-local-backend-x86_64-apple-darwin.zip",
        dir: "app"
      }
    },
    {
      when: "{{platform === 'darwin' && arch == 'x64'}}",
      method: "shell.run",
      params: {
        message: "unzip convex-local-backend-x86_64-apple-darwin.zip",
        path: "app"
      }
    },
    {
      when: "{{platform === 'linux' && arch == 'x64'}}",
      method: "fs.download",
      params: {
        uri: "https://github.com/get-convex/convex-backend/releases/download/precompiled-2024-04-29-5b5828c/convex-local-backend-x86_64-unknown-linux-gnu.zip",
        dir: "app"
      }
    },
    {
      when: "{{platform === 'linux' && arch == 'x64'}}",
      method: "shell.run",
      params: {
        message: "unzip convex-local-backend-x86_64-unknown-linux-gnu.zip",
        path: "app"
      }
    },
    {
      method: "notify",
      params: {
        html: "Click the 'start' tab to get started!"
      }
    }
  ]
}
