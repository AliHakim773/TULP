const doesObjectExist = (array, objectId) => {
  return array.some((obj) => obj.id === objectId)
}
module.exports = doesObjectExist
