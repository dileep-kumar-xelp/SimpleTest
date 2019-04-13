export const API_URL_ROOT = "http://13.233.212.134";

export async function get(url) {
  return await fetch(`${API_URL_ROOT}/${url}`, {
    headers: {
      "Content-Type": "application/json;charset=utf-8"
    }
  });
}
