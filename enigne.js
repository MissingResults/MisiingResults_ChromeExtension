class Engine {
  constructor() {
    if (Engine.instance == null) {
      Engine.instance = this;
    }
    this._engine = "";
    return Engine.instance;
  }
  setSearchEnginge(newEngine) {
    this._engine = newEngine;
    chrome.storage.local.set({ key: newEngine });
    console.log(this._engine);
  }
  getSearchEngine = async () => {
    if (this._engine == "") {
      const promise = new Promise((resolve, reject) => {
        chrome.storage.local.get(["key"], (result) => {
          if (result["key"] === undefined) {
            reject();
          } else resolve(result["key"]);
        });
      });

      return promise.then((value) => {
        return value;
      });
    } else return this._engine;
  };
}

export default Engine;
