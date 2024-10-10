import axios from "axios";

// export const baseURL = "http://192.168.1.93:4030/api";
// export const baseURL = "http://127.0.0.1:4030/api";
export const baseURL = "https://utility-service-server.onrender.com/api";

export const sendToServer = async (endPoint, method, body = "") => {
  const headers = {
    "Content-Type": "application/json",
  };

  try {
    const response = await axios({
      url: `${baseURL}/${endPoint}`,
      method: method,
      headers: headers,
      data: body, // for POST/PUT requests
    });
    // console.log(response.headers["access-token"]);
    return response; // Axios wraps the response in a 'data' field
  } catch (error) {
    console.error("Error in request:", error.message);
    throw error.response ? error.response.data : error.message;
  }
};

export const setLoginHeaders = header => {
  // set the token from the headers to the local storage of the browser
  localStorage.setItem("accessToken", header["access-token"]);
};
