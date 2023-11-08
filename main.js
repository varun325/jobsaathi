const { app, BrowserWindow, ipcMain } = require("electron");
const path = require("path");
const Store = require("electron-store");
// run this as early in the main process as possible
if (require("electron-squirrel-startup")) app.quit();

//define the store

const store = new Store();
//Listener for data coming from JSX
ipcMain.on("electron-store-set", async (event, arg) => {
  const table = store.get("table") || [];
  const newTable = table.filter((item) => item.jobId !== arg.jobId);
  newTable.push(arg);
  store.set("table", newTable);
  console.log("store : ", store.get("table"));
});

ipcMain.on("electron-store-get", async (event, val) => {
  event.returnValue = store.get(val);
});

let mainWindow;

function createWindow() {
  mainWindow = new BrowserWindow({
    width: 800,
    height: 600,
    webPreferences: {
      // preload: path.join(__dirname, 'preload.js'),
      nodeIntegration: true,
      enableRemoteModule: true,
      contextIsolation: false,
      nodeIntegrationInWorker: true,
      nodeIntegrationInSubFrames: true,
    },
  });

  // Log the resolved path to the 'build' directory
  const indexPath = path.join(__dirname, "build", "index.html");
  console.log("Resolved index.html path:", indexPath);

  mainWindow.loadFile(indexPath);
}

app.whenReady().then(createWindow);
