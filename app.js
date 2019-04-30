// const firebase = require('firebase');
const admin = require('firebase-admin');
const gcloud = require('./gcloudClients');

const credentials = gcloud.getCredentials(process.env.PROJECT_ID);
const firestore = gcloud.getFirestore(credentials);

const COLLECTION_NAME = 'ownersLeads'

const main = async () =>{
  const ownersLeads = await firestore.collection(COLLECTION_NAME)
    .get()
    .catch((err) => {
      throw new Error(err);
    });

  ownersLeads.docs.forEach(async snapshot => {
    const leadDoc = snapshot.data()
    console.log(leadDoc)
  });
}

main()