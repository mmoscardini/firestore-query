// const firebase = require('firebase');
const admin = require('firebase-admin');
const gcloud = require('./gcloudClients');

const credentials = gcloud.getCredentials(process.env.PROJECT_ID);
const firestore = gcloud.getFirestore(credentials);

const main = async () =>{
  const ownersLeads = await firestore.collection('ownersLeads')
    .where('leadUuid', '==', '00c6a27b-c231-4cde-93f0-370027444606')
    .get()
    .catch((err) => {
      throw new Error(err);
    });
  ownersLeads.then(snapshot => console.log(snapshot));
}

main()