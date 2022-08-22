import axios from "axios";
import Config from "react-native-config";

// urls
// gmail: https://en18gjug5rxi528.m.pipedream.net
// hotmail: https://enfofke221q4q2c.m.pipedream.net

export default async function remoteLog(payload: any) {
  if (Config.BUILD_TYPE !== "PRODUCTION") {
    axios
      .post("https://enfofke221q4q2c.m.pipedream.net", payload)
      .then()
      .catch(console.log);
  }
}
