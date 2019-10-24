import {join} from 'path';
import {format} from 'url';
import {BrowserWindow, app, Notification, ipcMain} from 'electron';

try {
  require('electron-reloader')(module);
} catch (err) {}



let win: BrowserWindow;

function createWindow() {
  win = new BrowserWindow({width: 1680, height: 1050, webPreferences: {
      nodeIntegration: true,
      webSecurity: false,
      allowRunningInsecureContent: true
    }});
  win.loadURL(format({
    pathname: join(__dirname, 'index.html'),
    protocol: 'file:',
    slashes: true
  }));

  if (process.env.NODE_ENV == 'development') {
    win.webContents.openDevTools();
  }

  win.on('closed', () => {
    win = null;
  });

  win.webContents.session.webRequest.onHeadersReceived((d:any, c:any) => {
    if(d.responseHeaders['x-frame-options'] || d.responseHeaders['X-Frame-Options']){
      delete d.responseHeaders['x-frame-options'];
      delete d.responseHeaders['X-Frame-Options'];
    }
    c({cancel: false, responseHeaders: d.responseHeaders});
  });
}

function notify() {
  const notification = {
    title: 'Mein Notification',
    body: 'Hallo from notification'
  };

  const newNotification = new Notification(notification);
  newNotification.show();
  newNotification.addListener('click', () => {
    console.log('Click Clack');
  });
}

ipcMain.on('notify-test', (evt, msg) => {
  console.log(evt, msg);
  console.log('jjj');
});

app.on('ready', () => {
  createWindow(),
  notify()
});

app.on('window-all-closed', () => {
  app.quit();
});

app.on('activate', () => {
  if (win === null) {
    createWindow();
  }
});
