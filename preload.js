const { contextBridge, ipcRenderer } = require('electron')

contextBridge.exposeInMainWorld('electronAPI', {
  min: () => ipcRenderer.send('setmin'),
  max: () => ipcRenderer.send('setmax'),
  close: () => ipcRenderer.send('setclose')
})