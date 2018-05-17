var recipes = {banana: 'cake'}

function updateObjectWithKeyAndValue(obj, key, value) {
  var newObj = {}
  Object.assign(newObj, obj)
  newObj[key] = value
  return newObj
}