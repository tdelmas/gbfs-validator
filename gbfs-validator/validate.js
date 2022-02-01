const Ajv = require('ajv')
const addFormats = require('ajv-formats')
const ajvErrors = require('ajv-errors')
const jsonpatch = require('fast-json-patch')
const jsonmerge = require('json-merge-patch')

module.exports = function validate(schema, object, options = {}) {
  const ajv = new Ajv({ allErrors: true, strict: false })
  ajvErrors(ajv)
  addFormats(ajv)

  let document = JSON.parse(JSON.stringify(schema))

  options.addSchema?.map(add => {
    if (add.$patch) {
      document = jsonpatch.applyPatch(document, add.$patch.with).newDocument
    }

    if (add.$merge) {
      document = jsonmerge.apply(document, add.$merge.with)
    }
  })

  let validate = ajv.compile(document)

  const valid = validate(object)

  return valid
    ? false
    : validate.errors.filter(
        e => !['$patch', '$merge', 'if'].includes(e.keyword)
      )
}
