const path = require('path')
const url = require('url')
const {app, BrowserWindow} = require('electron')
const {Menu} = require('electron')

Menu.setApplicationMenu(null)

let win


function createWindow() {
	win = new BrowserWindow({
		minWidth: 1200,
		minHeight: 700,
		icon: __dirname + '/img/jb.jpg'
	})



	win.loadURL(url.format({
		pathname: path.join(__dirname, 'index.html'),
		protocol: 'file:',
		slashes: true
	}))

	win.maximize()

	// win.webContents.openDevTools()

   // win = new BrowserWindow({width, height})



	win.on('closed', () => {
		win = null
	})
}





app.on('ready', createWindow )

app.on('window-all-closed', () => {
	app.quit()
})