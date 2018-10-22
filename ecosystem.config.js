const env_develop = {
  MONGO_URI: 'mongodb://middleware-testnet:ChR0mOn1T6@middleware-bitcoin-db-mongodb.middleware:27017/testnet-bitcoin-middleware-chronobank-io',
  MONGO_COLLECTION_PREFIX: 'bitcoin',
  RABBIT_URI: 'amqp://rabbit:nC865xfpbU41@rabbitmq-rabbitmq-svc.default:5672',
  RABBIT_SERVICE_NAME: 'testnet-bitcoin-middleware-chronobank-io',
  NETWORK: 'testnet',
  PROVIDERS: 'http://bcoin-testnet-node.default:18332@tcp://bcoin-testnet-node.default:43332',
  REST_PORT: 8080
};
const env_stage = {
  MONGO_URI: 'mongodb://middleware-testnet:ChR0mOn1T6@middleware-bitcoin-db-mongodb.middleware:27017/testnet-bitcoin-middleware-chronobank-io',
  MONGO_COLLECTION_PREFIX: 'bitcoin',
  RABBIT_URI: 'amqp://rabbit:nC865xfpbU41@rabbitmq-rabbitmq-svc.default:5672',
  RABBIT_SERVICE_NAME: 'testnet-bitcoin-middleware-chronobank-io',
  NETWORK: 'testnet',
  PROVIDERS: 'http://bcoin-testnet-node.default:18332@tcp://bcoin-testnet-node.default:43332',
  REST_PORT: 8080
};
const env_production = {
  MONGO_URI: 'mongodb://middleware-testnet:ChR0mOn1T6@middleware-bitcoin-db-mongodb.middleware:27017/mainnet-bitcoin-middleware-chronobank-io',
  MONGO_COLLECTION_PREFIX: 'bitcoin',
  RABBIT_URI: 'amqp://rabbit:nC865xfpbU41@rabbitmq-rabbitmq-svc.default:5672',
  RABBIT_SERVICE_NAME: 'testnet-bitcoin-middleware-chronobank-io',
  NETWORK: 'testnet',
  PROVIDERS: 'http://bcoin-testnet-node.default:18332@tcp://bcoin-mainnet-node.default:43332',
  REST_PORT: 8080
};

module.exports = {
  /**
   * Application configuration section
   * http://pm2.keymetrics.io/docs/usage/application-declaration/
   */
  apps: [
    {
      name: 'block_processor',
      script: 'src/core/middleware-bitcoin-blockprocessor',
      env: env
    },
    {
      name: 'balance_processor',
      script: 'src/core/middleware-bitcoin-balance-processor',
      env: env
    },
    {
      name: 'rest',
      script: 'src/core/middleware-bitcoin-rest',
      env: env
    }
  ]
}

