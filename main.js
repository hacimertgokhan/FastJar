const { app, BrowserWindow } = require('electron')
const path = require('path')


const createWindow = () => {
    const win = new BrowserWindow({
        width: 1280,
        height: 720,
        minWidth:500,
        webPreferences: {
            preload: path.join(__dirname, 'preload.js')
        }
    })
    win.setMenuBarVisibility(null);
    win.loadFile('mixium.html')
}

app.whenReady().then (() => {
    createWindow()
    
    app.on('activate', () => {
        if (BrowserWindow.getAllWindows().length === 0) createWindow()
      })
})

app.on('window-all-closed', () => {
    if (process.platform !== 'darwin') app.quit()
  })

