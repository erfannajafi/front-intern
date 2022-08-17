import axios from "axios";
import { BASE_URL } from "./variable.api";

export function getLists(id) {
  return new Promise((resolve, reject) => {
    axios
      .get(`${BASE_URL}/getForm?id=${id}`)
      .then((response) => {
        resolve(response.data);
      })
      .catch((error) => {
        reject(error);
      });
  });
}

// export function getLists ()
// {
//     return
//         axios.get(`${BASE_URL}/getForm?id=1000`)
//         .then(response => { resolve(response.data) })
//         .catch(error => { reject(error)  })

// }
