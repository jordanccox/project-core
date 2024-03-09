export async function checkLoggedIn() {
  const response = await fetch(`http://localhost:8000/profile`, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
    },
    credentials: "include",
  });
  const data = await response.json();

  console.log(data);
}
