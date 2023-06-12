const fastify = require('fastify')

const version = '3.0-RC'
const last_updated = 1566224400

function build(opts = {}) {
  const app = fastify(opts)

  app.get('/manifest.json', async function(request, reply) {
    return {
      last_updated,
      ttl: 0,
      version,
      data: {
        datasets: [
          {
            system_id: 'example_berlin',
            versions: [
              {
                version: '3.0-RC',
                url: `http://${request.hostname}/gbfs.json`
              }
            ]
          }
        ]
      }
    }
  })

  app.get('/gbfs.json', async function(request, reply) {
    return {
      last_updated,
      ttl: 0,
      version,
      data: {
        feeds: [
          {
            name: 'system_information',
            url: `http://${request.hostname}/system_information.json`
          },
          {
            name: 'vehicle_types',
            url: `http://${request.hostname}/vehicle_types.json`
          },
          {
            name: 'station_information',
            url: `http://${request.hostname}/station_information.json`
          },
          {
            name: 'station_status',
            url: `http://${request.hostname}/station_status.json`
          },
          {
            name: 'vehicle_status',
            url: `http://${request.hostname}/vehicle_status.json`
          }
        ]
      }
    }
  })

  app.get('/gbfs_versions.json', async function(request, reply) {
    return {
      last_updated,
      ttl: 0,
      version,
      data: {
        versions: [
          {
            version: '3.0-RC',
            url: `http://${request.hostname}/gbfs.json`
          }
        ]
      }
    }
  })

  app.get('/system_information.json', async function(request, reply) {
    return {
      last_updated,
      ttl: 0,
      version,
      data: {
        system_id: 'shared_bike',
        languages: ['en'],
        name: [
          {
            text: 'Shared Bike USA',
            language: 'en'
          }
        ],
        timezone: 'Etc/UTC',
        opening_hours: 'Mo-Su 00:00-23:59',
        feed_contact_email: 'datafeed@example.com'
      }
    }
  })

  app.get('/vehicle_types.json', async function(request, reply) {
    return {
      last_updated,
      ttl: 0,
      version,
      data: {
        vehicle_types: [
          {
            vehicle_type_id: 'biketype1',
            form_factor: 'bicycle',
            propulsion_type: 'human',
            name: [
              {
                text: 'Example Basic Bike',
                language: 'en'
              }
            ],
            default_reserve_time: 30,
            return_type: ['any_station', 'free_floating'],
            vehicle_assets: {
              icon_url: 'https://www.example.com/assets/icon_bicycle.svg',
              icon_url_dark:
                'https://www.example.com/assets/icon_bicycle_dark.svg',
              icon_last_modified: '2021-06-15'
            },
            default_pricing_plan_id: 'bike_plan_1',
            pricing_plan_ids: ['bike_plan_1', 'bike_plan_2', 'bike_plan_3']
          },
          {
            vehicle_type_id: 'cartype1',
            form_factor: 'car',
            propulsion_type: 'electric',
            name: [
              {
                text: 'Example Electric Car',
                language: 'en'
              }
            ],
            default_reserve_time: 30,
            max_range_meters: 100,
            return_type: ['any_station', 'free_floating'],
            vehicle_assets: {
              icon_url: 'https://www.example.com/assets/icon_car.svg',
              icon_url_dark: 'https://www.example.com/assets/icon_car_dark.svg',
              icon_last_modified: '2021-06-15'
            },
            default_pricing_plan_id: 'car_plan_1',
            pricing_plan_ids: ['car_plan_1', 'car_plan_2', 'car_plan_3']
          }
        ]
      }
    }
  })

  app.get('/vehicle_status.json', async function(request, reply) {
    return {
      last_updated,
      ttl: 0,
      version,
      data: {
        vehicles: [
          {
            vehicle_id: 'bike1',
            last_reported: 1609866109,
            lat: 12.345678,
            lon: 56.789012,
            is_reserved: false,
            is_disabled: false,
            vehicle_type_id: 'biketype1'
          },
          {
            vehicle_id: 'car1',
            last_reported: 1609866109,
            lat: 12.345678,
            lon: 56.789012,
            is_reserved: false,
            is_disabled: false,
            vehicle_type_id: 'cartype1',
            current_range_meters: 10
          }
        ]
      }
    }
  })

  return app
}

module.exports = build
