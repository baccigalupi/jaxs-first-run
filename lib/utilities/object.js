export const cloneWithDefaults = (_attributes, defaultValue = '') => {
  const attributes = { ..._attributes }
  for (let key in attributes) {
    const value = attributes[key]
    attributes[key] = value === undefined ? defaultValue : value
  }
  return attributes
}

export const separateAttrsAndEvents = (combined, defaultValue = '') => {
  const attributes = {}
  const events = {}

  for (let key in combined) {
    const value = combined[key]
    if (key.match(/on.+/i)) {
      const eventKey = key.slice(2).toLowerCase()
      events[eventKey] = value
    } else {
      attributes[key] = value === undefined ? defaultValue : value
    }
  }

  return {
    attributes,
    events
  }
}
