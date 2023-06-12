const GBFS = require('../gbfs')

describe('validation method', () => {
  let gbfsFeedServer

  beforeAll(async () => {
    gbfsFeedServer = require('./fixtures/v3.0-RC/default')()

    await gbfsFeedServer.listen()

    return gbfsFeedServer
  })

  afterAll(() => {
    return gbfsFeedServer.close()
  })

  test('should validate feed', async () => {
    const url = `http://${gbfsFeedServer.server.address().address}:${
      gbfsFeedServer.server.address().port
    }`
    const gbfs = new GBFS(`${url}/gbfs.json`)

    expect.assertions(1)

    return gbfs.validation().then(result => {
      expect(result).toMatchObject({
        summary: expect.objectContaining({
          version: { detected: '3.0-RC', validated: '3.0-RC' },
          validatorVersion: '1.0.0',
          hasErrors: false
        }),
        files: expect.any(Array)
      })
    })
  })
})
