import axios from "axios";

const baseURL = "http://127.0.0.1:4030";
// export const sendToServer = async (endPoint, method, body = null) => {
//   const headers = {
//     "Content-Type": "application/json",
//   };

//   // Build the options object based on method and body
//   const options = {
//     method,
//     headers,
//   };

//   // Only include the body if the method is not GET
//   if (body && method !== "GET") {
//     options.body = JSON.stringify(body);
//   }

//   return new Promise((resolve, reject) => {
//     fetch(`${baseURL}/${endPoint}`, options)
//       .then(response => {
//         return response.json();
//       })
//       .then(data => {
//         resolve(data);
//       })
//       .catch(err => {
//         reject(err);
//       });
//   });
// };

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

    return response.data; // Axios wraps the response in a 'data' field
  } catch (error) {
    console.error("Error in request:", error);
    throw error.response ? error.response.data : error.message;
  }
};
