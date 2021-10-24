// main.js

// Modules to control application life and create native browser window
const {app, shell, BrowserWindow,ipcMain,dialog} = require('electron')
const path = require('path')

var usb = require('usb')

// Handle when click in NodeJS to connect
const { spawnSync } = require( 'child_process' );
ipcMain.on("channel_1",(event,data)=>{
    //console.log("Date received by Node in channel_1:"+data);
    let com = 'core1 -i '+data;
    let dir = spawnSync('cmd', ['/c', com]);
    event.reply('channel_2', `${dir.output.toString()}`);
    //console.log(dir.output.toString());
})

// Handle when click in NodeJS to choose file
ipcMain.on("channel_3", async event => {
    const dir = await dialog.showOpenDialog({
       properties: ["openFile",'*.mot'],
       filters: [{ name: 'Custom', extensions: ['mot'] },]
  });
  if(dir.canceled==true){
    event.reply('channel_4', 'error');
  }
  else if(dir.filePaths){
    event.reply('channel_4', dir.filePaths[0]);
  }
});



ipcMain.on("channel_5",(event,data)=>{
  //console.log("Date received by Node in channel_5:"+data);
  let data_buffer1 = data.split(',');

  //console.log("COM:"+data_buffer1[0]);
 // console.log("Path:"+data_buffer1[1]);

  let com = 'core1 -vvwr '+data_buffer1[0]+' '+data_buffer1[1];
  //console.log(com);

  let dir = spawnSync('cmd', ['/c', com]);
  event.reply('channel_6', `${dir.output.toString()}`);
  //console.log(dir.output.toString());
})




  const nativeImage = require('electron').nativeImage;
  var image = nativeImage.createFromPath(__dirname + '/assets/img/logo/logo.png'); 
  image.setTemplateImage(true);


function createWindow () {
  // Create the browser window.
  const mainWindow = new BrowserWindow({
    width: 800,
    height: 600,
    resizable: false,
    icon: image,
    webPreferences: {
      nodeIntegration: true,
      contextIsolation: false,
      enableRemoteModule: true,  
      allowRendererProcessReuse: true,
        preload: path.join(__dirname, 'preload.js')
    }
  })

  // and load the index.html of the app.
  mainWindow.loadFile('index.html')


  mainWindow.setMenuBarVisibility(false)

  // Open the DevTools.
  // mainWindow.webContents.openDevTools()

}

// This method will be called when Electron has finished
// initialization and is ready to create browser windows.
// Some APIs can only be used after this event occurs.
app.whenReady().then(() => {
  createWindow()

  app.on('activate', function () {
    // On macOS it's common to re-create a window in the app when the
    // dock icon is clicked and there are no other windows open.
    if (BrowserWindow.getAllWindows().length === 0) createWindow()
  })
})

// Quit when all windows are closed, except on macOS. There, it's common
// for applications and their menu bar to stay active until the user quits
// explicitly with Cmd + Q.
app.on('window-all-closed', function () {
  if (process.platform !== 'darwin') app.quit()
})

// In this file you can include the rest of your app's specific main process
// code. You can also put them in separate files and require them here.

