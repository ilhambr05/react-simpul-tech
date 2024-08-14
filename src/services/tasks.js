const apiUrl = import.meta.env.VITE_API_URL;

export async function fetchTasks() {
  const response = await fetch(`${apiUrl}/tasks`);
  const resData = await response.json();

  if (!response.ok) {
    throw new Error("Failed to fetch Task List");
  }

  return resData;
}
