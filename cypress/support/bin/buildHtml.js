const fs = require('fs')

const templateName = process.argv[2]

const template = `<html>
  <head>
    <link
      rel="stylesheet"
      href="https://cdn.jsdelivr.net/npm/bootstrap@4.5.3/dist/css/bootstrap.min.css" 
      integrity="sha384-TX8t27EcRE3e/ihU7zmQxVncDAy5uIKz4rEkgIXeMed4M0jlfIDPvg6uqKI2xXr2" 
      crossorigin="anonymous"
    >
  <body>
    <div id='app'></div>
    <script src="./${templateName}.js"></script>
  </body>
</html>`

fs.writeFileSync(`${__dirname}/../apps/index.html`, template)
