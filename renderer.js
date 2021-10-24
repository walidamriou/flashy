const { contextBridge, ipcRenderer } = require("electron");

console.log(ipcRenderer);


// Send to NodeJS when click
function buttonclick1(){
  // This will send 1 as a message to the main process with "msg" as the channel name
  ipcRenderer.send("msg1",1)
  console.log("Test Click")
}

// receive from nodeJS
ipcRenderer.on("msg1",(event,data)=>{
    console.log(data);
})

// Open all links in external browser
let shell = require('electron').shell
document.addEventListener('click', function (event) {
  if (event.target.tagName === 'A' && event.target.href.startsWith('https')) {
    event.preventDefault()
    shell.openExternal(event.target.href)
  }
})