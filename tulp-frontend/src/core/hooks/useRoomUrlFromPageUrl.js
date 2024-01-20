const useRoomUrlFromPageUrl = () => {
  const match = window.location.search.match(/roomUrl=([^&]+)/i)
  return match && match[1] ? decodeURIComponent(match[1]) : null
}

export default useRoomUrlFromPageUrl
