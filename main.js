'use strict';
const electron = require('electron');
const autoUpdater = require('electron-auto-updater').autoUpdater;
const app = electron.app;
const BrowserWindow = electron.BrowserWindow;

var mainWindow = null;
// app.on('window-all-closed', function() {
//   if (process.platform != 'darwin') {
//     app.quit();
//   }
// });
app.on('ready', () => {
  mainWindow = new BrowserWindow({width: 800, height: 800, webPreferences: { nodeIntegration : true }});
  mainWindow.loadURL('file://' + __dirname + '/index.html');
  mainWindow.webContents.openDevTools();
  mainWindow.on('closed', function() {
    mainWindow = null;
  });
  
  
  autoUpdater.checkForUpdates();
  console.log('autoUpdater.getFeedURL()', autoUpdater.getFeedURL());
  autoUpdater.on('error', (err) => {
    console.log('err');
  });
  autoUpdater.on('checking-for-update', () => {
    console.log('checking-for-update');
  });
  autoUpdater.on('update-available', () => {
    console.log('update-available');
  });
  autoUpdater.on('update-not-available', () => {
    console.log('update-not-available');
  });

});


