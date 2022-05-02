import config from "../config.json";

export default class Request {
  static domain = config.sapi;
  static domainf = config.sapif;

  /**
   * 
   * @param {string} path 
   * @param {object} headers // key-value pairs
   * @param {Function} cb // if error
   */
  static async get (path, headers, cb)
  {
    try {
      let local_path = path.startsWith("~>") ? this.domain + path.substring(2, path.length) : this.domainf + path
      const res = await fetch(local_path, {
        method: "GET",
        headers: headers || {
          "Content-Type": "application/json",
          "Authorization": "asdasd"
        }
      })
      const content_type = res.headers.get("Content-Type");
      if(content_type.search("application/json") !== -1) {
        await cb(null, await res.json());
      }else{
        await cb(null, res)
      }
    } catch (e) {
      await cb(e, null);
    }
  }



}