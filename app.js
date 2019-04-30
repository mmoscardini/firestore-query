const admin = require('firebase-admin');
const gcloud = require('./gcloudClients');
const {queryBuilder } = require('./queryBuilder');

const credentials = gcloud.getCredentials(process.env.PROJECT_ID);
const firestore = gcloud.getFirestore(credentials);

const main = async () =>{
  const query = await queryBuilder(firestore)
    .catch((err) => {
      throw new Error(err);
    });

  query.docs.forEach(async snapshot => {
    const docData = snapshot.data()
    console.log(docData)
  });
}

main()