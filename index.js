var recipes = {banana: 'cake'}

function updateObjectWithKeyAndValue(obj, key, value) {
  var newObj = new Object(obj)
  newObj[key] = value
  return newObj
}