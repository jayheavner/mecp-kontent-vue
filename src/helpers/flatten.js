function hasOwnProperty(obj, prop) {
  var proto = obj.__proto__ || obj.constructor.prototype;
  return (prop in obj) &&
    (!(prop in proto) || proto[prop] !== obj[prop]);
}

function flattenArray(array, prop) {
  let newArray = [];
  for (const item of array) {
    newArray.push(flatten(item));
  }
  if (newArray.length === 1)
    return newArray[0];
  else
    return newArray;
}

export function flatten(obj) {
  if (!obj) return null;
  if (hasOwnProperty(obj, 'value')) {
    return obj.value
  }
  let o = {};
  for (const prop in obj) {
    let t = false;
    try {
    t = hasOwnProperty(obj[prop], 'value');
    } catch (ex) {
      //debugger;
      console.log(`ERROR - ${ex}`);
    }
    if (t)
      if (obj[prop].type === 'asset') {
        o[prop] = obj[prop].value[0];
      } else if (Array.isArray(obj[prop].value)) {
      let val = flattenArray(obj[prop].value, prop);
      o[prop] = val;
    } else
      o[prop] = obj[prop].value
  }
  return o;
}
