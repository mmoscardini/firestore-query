const apiKey = process.env.apiKey;
const authDomain = process.env.authDomain;
const databaseURL = process.env.databaseURL;
const projectId = process.env.projectId;
const storageBucket = process.env.storageBucket;
const messagingSenderId = process.env.messagingSenderId;
const email = process.env.email
const password = process.env.password

const firebaseConfig = {
  apiKey: apiKey,
  authDomain: authDomain,
  databaseURL: databaseURL,
  projectId: projectId,
  storageBucket: storageBucket,
  messagingSenderId: messagingSenderId,
};

const firebaseLoginInfo = {
  email,
  password,
}

module.exports = {
  firebaseConfig,
  firebaseLoginInfo
}