const { contextBridge, ipcRenderer } = require("electron");

contextBridge.exposeInMainWorld("electron", {
  start: (date, endpoint) => ipcRenderer.send("start", date, endpoint),
});
