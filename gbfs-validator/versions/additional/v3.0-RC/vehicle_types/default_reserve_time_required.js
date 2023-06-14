module.exports = ({plan_ids}) => ({
  "$schema": "http://json-schema.org/draft-07/schema",
  "$id": "default_reserve_time",
  "type": "object",
  "properties": {
    "data": {
      "type": "object",
      "properties": {
        "vehicle_types": {
          "type": "array",
          "items": {
            "type": "object",
            "properties": {
              "plan_id": {
                "type": "string"
              },
              "default_reserve_time": {
                "type": "integer"
              }
            },
            //"if": { "properties": { "hasA": { "enum": plan_ids} } },
            //"then": { "required":["default_reserve_time"] },
            "required": ["default_reserve_time"]
          }
        }
      }
    }
  }
})
