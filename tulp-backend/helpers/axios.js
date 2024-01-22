const { default: axios } = require("axios")

const sendRequest = async ({ route, method = "GET", body }) => {
  const response = await axios.request({
    url: `https://glot.io/api/run/${route}/latest`,
    method,
    data: body,
    headers: {
      Authorization: `Toekn ${process.env.GLOT_API_KEY}`,
      "Content-Type": "application/json",
    },
  })

  return response.data
}

module.exports = sendRequest
