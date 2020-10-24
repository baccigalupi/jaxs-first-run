import { JSDOM } from "jsdom"

const defaultContent = "<div id='app'></div>"

export const createTestDom = (content = defaultContent) => {
  const dom =  new JSDOM(
    `<!DOCTYPE html><body>${content}<body>`, 
    {url: "http://localhost"}
  )
  return dom.window.document
}

export const domToString = (element) => {
  if (element.outerHTML) return element.outerHTML
  
  return element.body.outerHTML
}