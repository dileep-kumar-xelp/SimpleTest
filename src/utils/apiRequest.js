export const API_URL_ROOT = "http://13.233.212.134";

export async function get() {
  //return await fetch(`${API_URL_ROOT}/${url}`, {
  // headers: {
  //   "Content-Type": "application/json;charset=utf-8"
  // }
  console.log("apiiiiiiiii");
  return await fetch("https://www.reddit.com/r/sports/top.json?limit=10", {});
}
