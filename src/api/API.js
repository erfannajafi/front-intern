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

export function updateLists(lists) {
  return new Promise((resolve, reject) => {
    axios
      .patch(`${BASE_URL}/setForm`,  lists  )
      .then((response) => {
        resolve(response.data);
        console.log(response.data);
      })
      .catch((error) => {
        reject(error);
        console.log(error);
      });
  });
}
