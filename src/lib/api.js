const configuredBase = import.meta.env.VITE_API_BASE_URL;
export const API_BASE_URL = (configuredBase || "http://localhost/portfolio/backend/api").replace(/\/$/, "");

export async function postJson(endpoint, payload) {
  const response = await fetch(`${API_BASE_URL}/${endpoint}`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(payload),
  });
  const result = await response.json().catch(() => ({}));
  if (!response.ok || result.success === false) {
    throw new Error(result.message || "Request failed. Please try again.");
  }
  return result;
}
