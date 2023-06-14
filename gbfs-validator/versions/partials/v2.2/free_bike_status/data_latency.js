module.exports = () => {
  const now = Math.floor(Date.now() / 1000) + 1

  return {
    $id: 'data_latency#',
    $merge: {
      source: {
        $ref:
          'https://github.com/NABSA/gbfs/blob/v2.2/gbfs.md#free_bike_statusjson'
      },
      with: {
        properties: {
          last_updated: {
            minimum: now - 300,
            maximum: now
          },
          ttl: {
            maximum: 0
          }
        }
      }
    }
  }
}
