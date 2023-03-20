module.exports = {
  name: 'generate:service',
  description: 'Create new service inside src/service',
  run: async toolbox => {
    const {
      parameters,
      template,
      print: {success, error}
    } = toolbox

    const name = parameters.first

    if(!name) {
      error('Service name must be specified')
      return
    }

    await template.generate({
      template: 'service.js.ejs',
      target: `src/services/${name}.service.ts`,
      props: { name }
    })

    success(`Generated ${name} service`)
  }
}