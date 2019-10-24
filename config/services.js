'use strict'

const Evn = use('Env')

module.exports = {
  sentry: {
    dsn: Evn.get('SENTRY_DSN')
  }
}
