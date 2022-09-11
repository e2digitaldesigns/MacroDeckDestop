export enum IpcRendererTypes {
  database = "database",
  databaseReturn = "database:return",
  header = "header",
  importSettings = "importSettings",
  importSettingsReturn = "importSettings:return",
  mdPlaySound = "MacroDeck:playSound",
  Ping = "ping"
}

export enum IpcRendererTypesAction {
  close = "close",
  fsToggle = "fsToggle",
  minimize = "minimize",
  loadAppData = "loadAppData",
  saveAppData = "saveAppData"
}
