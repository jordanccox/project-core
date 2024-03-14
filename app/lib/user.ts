import axios from "axios";

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
 * @param data - email and password from form submission
 */
export const login = async (data: any) => {
  try {
    const response = await axios.post(`http://localhost:8000/user/login`, data);
    console.log(response.data); // set global logged in state if responseCode == 200
    return response.data;
  } catch(err) {
    console.log("Username or password combination failed");
  }
};