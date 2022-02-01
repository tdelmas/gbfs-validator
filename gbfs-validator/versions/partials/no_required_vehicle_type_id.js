module.exports = () => ({
  $id: 'no_required_vehicle_type_id.json#',
  $merge: {
    source: {
      $ref:
        'https://github.com/NABSA/gbfs/blob/master/gbfs.md#free_bike_statusjson'
    },
    with: {
      properties: {
        data: {
          properties: {
            bikes: {
              items: {
                properties: {
                  vehicle_type_id: {
                    not: {},
                    errorMessage: "property 'vehicle_type_id' must not be present"
                  }
                }
              }
            }
          }
        }
      }
    }
  }
})
