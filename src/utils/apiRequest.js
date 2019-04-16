export const API_URL_ROOT = "https://www.reddit.com/r";

export async function get(url) {
  //return await fetch(`${API_URL_ROOT}/${url}`, {
  // headers: {
  //   "Content-Type": "application/json;charset=utf-8"
  // }
  console.log("apiiiiiiiii");
  console.log("url ", `${API_URL_ROOT}/${url}`);
  //return await fetch("https://www.reddit.com/r/sports/top.json?limit=10", {});
  return await fetch(`${API_URL_ROOT}/${url}`);
}
