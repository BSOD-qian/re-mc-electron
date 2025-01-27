const { app, BrowserWindow, shell, ipcMain } = require('electron');
const path = require('node:path');
const createWindow = () => {
    const win = new BrowserWindow({
        width: 800,
        height: 600,
        fullscreenable: true,
        fullscreen: false,
        simpleFullscreen: true,
        autoHideMenuBar: true,
        frame: false,
        webPreferences: {
            preload: path.join(__dirname, 'preload.js'),
            sandbox: false
        }
    })
    ipcMain.on('setmin', () => {
        win.minimize();
    })
    ipcMain.on('setmax', () => {
        const maximized = win.isMaximized();
        if (maximized == false){
            win.maximize();
        }else{
            win.unmaximize();
        }
    })
    ipcMain.on('setclose', () => {
        app.quit();
    })
    win.loadFile('./index.html')
}
app.whenReady().then(() => {
    createWindow()
})
process.env['ELECTRON_DISABLE_SECURITY_WARNINGS'] = 'true'