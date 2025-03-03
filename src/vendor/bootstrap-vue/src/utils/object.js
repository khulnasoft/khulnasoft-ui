import { isObject } from './inspect'

// --- Static ---

export const assign = (...args) => Object.assign(...args)
export const create = (proto, optionalProps) => Object.create(proto, optionalProps)
export const defineProperties = (obj, props) => Object.defineProperties(obj, props)
export const defineProperty = (obj, prop, descriptor) =>
  Object.defineProperty(obj, prop, descriptor)
export const getOwnPropertyNames = obj => Object.getOwnPropertyNames(obj)
export const keys = obj => Object.keys(obj)

// --- "Instance" ---

export const hasOwnProperty = (obj, prop) => Object.prototype.hasOwnProperty.call(obj, prop)

// --- Utilities ---

// Shallow copy an object
export const clone = obj => ({ ...obj })

// Return a shallow copy of object with the specified properties only
// See: https://gist.github.com/bisubus/2da8af7e801ffd813fab7ac221aa7afc
export const pick = (obj, props) =>
  keys(obj)
    .filter(key => props.indexOf(key) !== -1)
    .reduce((result, key) => ({ ...result, [key]: obj[key] }), {})

// Return a shallow copy of object with the specified properties omitted
// See: https://gist.github.com/bisubus/2da8af7e801ffd813fab7ac221aa7afc
export const omit = (obj, props) =>
  keys(obj)
    .filter(key => props.indexOf(key) === -1)
    .reduce((result, key) => ({ ...result, [key]: obj[key] }), {})

// Merges two object deeply together
// See: https://gist.github.com/Salakar/1d7137de9cb8b704e48a
export const mergeDeep = (target, source) => {
  if (isObject(target) && isObject(source)) {
    keys(source).forEach(key => {
      if (isObject(source[key])) {
        if (!target[key] || !isObject(target[key])) {
          target[key] = source[key]
        }
        mergeDeep(target[key], source[key])
      } else {
        assign(target, { [key]: source[key] })
      }
    })
  }
  return target
}

// Returns a shallow copy of the object with keys in sorted order
export const sortKeys = obj =>
  keys(obj)
    .sort()
    .reduce((result, key) => ({ ...result, [key]: obj[key] }), {})

// Convenience method to create a read-only descriptor
export const readonlyDescriptor = () => ({ enumerable: true, configurable: false, writable: false })
