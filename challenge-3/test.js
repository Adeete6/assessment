function getValueFromNestedObject(obj, key) {
  // Split the key by '/'
  const keys = key.split('/');

  // Iterate through the keys to traverse the nested object
  for (const k of keys) {
    // If obj is not an object or is null, return undefined
    if (typeof obj !== 'object' || obj === null) {
      return undefined;
    }
    // If the current key exists in the object, update obj to the nested object
    if (k in obj) {
      obj = obj[k];
    } else {
      return undefined; // If key is not found, return undefined
    }
  }
  return obj; // Return the value associated with the last key
}

// Test cases
const object1 = {"a":{"b":{"c":"d"}}};
const object2 = {"x":{"y":{"z":"a"}}};

console.log(getValueFromNestedObject(object1, 'a/b/c')); // Output: d
console.log(getValueFromNestedObject(object2, 'x/y/z')); // Output: a
