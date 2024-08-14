const apiUrl = import.meta.env.VITE_API_URL;

export async function fetchChatSummary() {
  const response = await fetch(`${apiUrl}/chat-summary`);
  const resData = await response.json();

  if (!response.ok) {
    throw new Error("Failed to fetch chat summary");
  }

  return resData;
}

export async function fetchChatById(id) {
  const response = await fetch(`${apiUrl}/chat/${id}`);
  const resData = await response.json();

  if (!response.ok) {
    throw new Error("Failed to fetch chat with ID = " + id);
  }

  return resData;
}
