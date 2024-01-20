const usePageUrlFromRoomUrl = (roomUrl) => {
  return (
    window.location.href.split("?")[0] +
    (roomUrl ? `?roomUrl=${encodeURIComponent(roomUrl)}` : "")
  )
}

export default usePageUrlFromRoomUrl
