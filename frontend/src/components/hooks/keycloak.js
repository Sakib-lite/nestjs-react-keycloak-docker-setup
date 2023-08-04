import Keycloak from 'keycloak-js';

const keycloakConfig = {
  url: '127.0.0.1:4000',
  realm: 'myrealm',
  clientId: 'myclient'
};

const keycloak = new Keycloak(keycloakConfig);

export default keycloak;