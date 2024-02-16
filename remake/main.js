const { app, BrowserWindow } = require('electron')
const path = require('path')


const createWindow = () => {
    const win = new BrowserWindow({
        width: 500,
        height: 720,
        minHeight: 600,
        maxHeight: 720,
        maxWidth:500,
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
