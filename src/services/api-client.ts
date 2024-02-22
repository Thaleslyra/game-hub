import axios from "axios";

export default axios.create({
  baseURL: "https://api.rawg.io/api",
  params: {
    key: "7601e542cb22401d923f4a2b42c41455",
  },
});
