const { default: axios } = require("axios")

const sendRequest = async ({ route, method = "GET", body }) => {
  const response = await axios.request({
    url: `https://glot.io/api/run/${route}/latest`,
    method,
    data: body,
    headers: {
      Authorization: "Toekn 647b691b-60c0-45d3-938f-dafb3a5a3149",
      "Content-Type": "application/json",
    },
  })

  return response.data
}

module.exports = sendRequest
