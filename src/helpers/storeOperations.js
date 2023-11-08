export const saveToStorage = (object, ipcRenderer) => {
  // send the data i want to send as a string
  ipcRenderer.send("electron-store-set", object);
};

export const getFromStorage = (key, ipcRenderer) => {
  const table = ipcRenderer.sendSync("electron-store-get", key);
  console.log(table);
  return table;
};
