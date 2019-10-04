export default function objforEach(obj, callback) {
  Object.entries(obj).forEach(([propertyName, value]) =>
    callback([propertyName, value])
  )
}

