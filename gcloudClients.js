const Firestore = require('@google-cloud/firestore');

const getCredentials = (projectId) => {
  const keyfilesPath = './keyfile.json';
  return {
    projectId,
    keyFilename: keyfilesPath,
  };
};

const getFirestore = (credentials) => {
  const firestore = new Firestore(credentials);
  const settings = { timestampsInSnapshots: true };
  firestore.settings(settings);
  return firestore;
};

module.exports = Object.freeze({
  getCredentials,
  getFirestore,
});
