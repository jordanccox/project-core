const API_URI = process.env.NEXT_PUBLIC_API_URI;

export async function checkLoggedIn() { // test function to see if frontend is properly communicating with API
  const response = await fetch(`${API_URI}/profile`, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
    },
    credentials: "include",
  });
  const data = await response.json();

  console.log(data);
}

/**
 * Login 
 */