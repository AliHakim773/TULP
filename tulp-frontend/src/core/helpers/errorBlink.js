export const errorBlink = (setState, msg) => {
  setState({
    hidden: false,
    msg,
  })
  setTimeout(() => {
    setState({
      hidden: true,
      msg: "",
    })
  }, 3000)
}
