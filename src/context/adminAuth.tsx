import axios from "axios";
import { BASE_URL } from "./api";
//@ts-expect-error error
let loggedUserData = null; 

export const fetchUser = async () => {
  try {

    const token = localStorage.getItem("admin");
    if (!token) {
      throw new Error("No token found");
    }

    const response = await axios.get(`${BASE_URL}/user`, {
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
    });

    loggedUserData = response.data; 
    return loggedUserData; 
  } catch (error) {
    console.error("Error fetching user data:", error);
    throw new Error(
   //@ts-expect-error error
      error.response?.data?.message || "Failed to fetch user data"
    );
  }

};

export const getLoggedUserData = () => {

//@ts-expect-error error
  return loggedUserData;
};
