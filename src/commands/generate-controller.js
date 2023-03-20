module.exports = {
  name: 'generate:controller',
  description: 'Create new controller inside src/controller',
  run: async toolbox => {
    const {
      parameters,
      template,
      print: {success, error}
    } = toolbox

    const name = parameters.first

    if(!name) {
      error('Controller name must be specified')
      return
    }

    await template.generate({
      template: 'controller.js.ejs',
      target: `src/controllers/${name}.controller.ts`,
      props: { name }
    })

    success(`Generated ${name} controller`)
  }
}