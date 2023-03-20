module.exports = {
  name: 'generate:route',
  description: 'Create new route inside src/routes',
  run: async toolbox => {
    const {
      parameters,
      template,
      print: {success, error}
    } = toolbox

    const name = parameters.first

    if(!name) {
      error('route name must be specified')
      return
    }

    await template.generate({
      template: 'route.js.ejs',
      target: `src/routes/${name}.route.ts`,
      props: { name }
    })

    success(`Generated ${name} route`)
  }
}