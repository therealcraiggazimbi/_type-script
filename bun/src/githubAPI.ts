import axios from "axios";

async function fetchUser(user: unknown) {
  const res = await axios.get("https://api.github.com/users/" + user);

  return res.data;
}

export default fetchUser;
