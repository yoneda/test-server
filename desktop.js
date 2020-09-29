const { app, BrowserWindow } = require("electron");

function createWindow(){
  const win = new BrowserWindow({
    width: 800,
    height: 600,
    webPreferences:{
      nodeIntegration: true
    }
  })

  // index.htmlをロード
  // win.loadFile("index.html");
  // win.loadURL("http://localhost:3000");
  // またはローカルファイルをロード
  // win.loadURL(`file://${__dirname}/../dist/index.html`);
  win.loadFile("./dist/index.html");
}

app.whenReady().then(createWindow);

app.on("window-all-closed", ()=>{
  console.log("window-all-closed");
  if(process.platform !== "darwin"){
    app.quit();
  }
})

app.on("activate", () => {
  console.log("activate");
  if(BrowserWindow.getAllWindows().length === 0){
    createWindow();
  }
})