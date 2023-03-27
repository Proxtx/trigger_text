import fs from "fs/promises";

export class Trigger {
  constructor(triggerConfig, folder) {
    this.folder = folder;
    this.config = triggerConfig;

    (async () => {
      this.html = await fs.readFile(this.folder + "index.html", "utf8");
      this.handler = await fs.readFile(this.folder + "handler.js", "utf8");
    })();
  }

  getSelectionGui = async () => {
    return {
      html: this.html,
      handler: this.handler,
    };
  };

  triggers = async (data) => {
    return data;
  };
}
