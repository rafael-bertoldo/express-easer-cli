module.exports = {
  name: 'init',
  description: 'Create new Typescript and express project',
  run: async toolbox => {
    const {
      parameters,
      template,
      print: {success, error}
    } = toolbox

    await template.generate({
      template: 'index.js.ejs',
      target: 'src/index.ts',
    })

    await template.generate({
      template: 'server.js.ejs',
      target: 'src/server.ts'
    })

    await template.generate({
      template: 'appError.js.ejs',
      target: 'src/errors/appError.ts'
    })

    await template.generate({
      template: 'expressD.js.ejs',
      target: 'src/@types/express.d.ts'
    })

    await template.generate({
      template: 'routes.js.ejs',
      target: 'src/routes/index.ts'
    })

    success(`Generated typescript project`)
  }
}