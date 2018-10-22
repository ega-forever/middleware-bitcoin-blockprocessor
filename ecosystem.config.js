const env = {
  MONGO_URI: 'mongodb://middleware-testnet:ChR0mOn1T6@middleware-bitcoin-db-mongodb.middleware:27017/testnet-bitcoin-middleware-chronobank-io',
  MONGO_COLLECTION_PREFIX: 'bitcoin',
  RABBIT_URI: 'amqp://rabbit:nC865xfpbU41@rabbitmq-rabbitmq-svc.default:5672',
  RABBIT_SERVICE_NAME: 'testnet-bitcoin-middleware-chronobank-io',
  NETWORK: 'testnet',
  PROVIDERS: 'http://bcoin-testnet-node.default:18332@tcp://bcoin-testnet-node.default:43332',
  REST_PORT: 8080
};
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
 apps: [
   {
     name: 'middleware-bitcoin-blockprocessor',
     script: './index.js',
     watch: true,
     disable_trace: false,
     env: {
       NODE_ENV: 'development'
     },
     env_production: env_production: {
       NODE_ENV: 'production'
     },
     env_develop: {
       NODE_ENV: 'development'
     },
     env_stage: {
       NODE_ENV: 'production'
     }
   }
 ]
}
