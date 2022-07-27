const EventEmitter = require("events");

class MacroEvents extends EventEmitter {
  constructor() {
    super();
    this.on("go", arg => {
      console.log(7, "on", arg);
      // io.emit("macroDeckerSocket", arg);
    });
  }

  mdEvents = arg => {
    this.emit("go", arg);
  };
}

module.exports = MacroEvents;
