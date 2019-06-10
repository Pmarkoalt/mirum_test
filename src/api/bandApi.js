import axios from "axios"

export function getBand(id) {
  return axios
    .get(`http://localhost:3001/bands/${id}`)
    .then(response => response.data)
    .catch(error => {
      console.log(`Error: ${error.message}`)
    });
}
export function getAllBands() {
    return axios
    .get(`http://localhost:3001/bands/`)
    .then(response => response.data)
    .catch(error => {
      console.log(`Error: ${error.message}`)
    });
}
