const createRoom = async () => {
  const exp = Math.round(Date.now() / 1000) + 60 * 30
  // expiery date 30 min
  const options = {
    properties: {
      exp,
    },
  }

  const isLocal =
    import.meta.env.VITE__ROOM_ENDPOINT &&
    import.meta.env.VITE__ROOM_ENDPOINT === "local"
  const endpoint = isLocal
    ? "https://api.daily.co/v1/rooms/"
    : `${window.location.origin}/api/rooms`

  const headers = isLocal && {
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${import.meta.env.VITE_DAILY_API_KEY}`,
    },
  }

  const response = await fetch(endpoint, {
    method: "POST",
    body: JSON.stringify(options),
    ...headers,
  })

  return response.json()
}

export default { createRoom }
