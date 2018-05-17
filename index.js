var recipes = {banana: 'cake'}

function updateObjectWithKeyAndValue(obj, key, value) {
  var newObj = {}
  Object.assign(newObj, obj)
  return newObj
}