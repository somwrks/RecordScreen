const { contextBridge, ipcRenderer } = require('electron');
contextBridge.exposeInMainWorld('desktopCapturer', require('electron').desktopCapturer);