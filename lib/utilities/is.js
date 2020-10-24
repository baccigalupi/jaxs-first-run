export const isArray = (obj) => Array.isArray(obj)

export const isObject = (obj) => {
  return typeof obj === 'object' && obj !== null && !isArray(obj)
}

export const isTerminal = (value) => !isArray(value) && !isObject(value)
