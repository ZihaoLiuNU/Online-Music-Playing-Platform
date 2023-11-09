//back end api, use fetch to handle restful requests and correct the response for front end to use.
const port = "http://localhost:9000/";
export default function MyApi(method, baseURL, data, params="") {

    baseURL = port + baseURL;
    console.log(baseURL,"base")
    const options = {
        method: method,
        headers: { 'Content-Type': 'application/json' }
      };
      if (method !== 'GET') {
        options.body = JSON.stringify(data);
      }

    const requestURL = baseURL + params;

    return fetch(requestURL, options)
        .then((response) => {
            if (!response.ok) {
              //if error, print the error to console.
                console.error(response);
              }
        return response.json();
        })
}