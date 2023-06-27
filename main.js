const { app, BrowserWindow } = require('electron')

function createWindow () {
  const win = new BrowserWindow({
    width: 1024,
    height: 800,
    icon: './logo_new.png',
    fullscreen: true,
    webPreferences: {
      nodeIntegration: false,
      contextIsolation: true
    }
  })

  win.loadURL('https://luxifyverse.com/')
}

app.whenReady().then(createWindow)

app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') {
    app.quit()
  }
})

app.on('activate', () => {
  if (BrowserWindow.getAllWindows().length === 0) {
    createWindow()
  }
})
