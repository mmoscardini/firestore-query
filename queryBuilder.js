const fs = require('fs');
const { parseClauseValue } = require('./utils/parser');

const filePath = './query.txt';

const queryBuilder = (firestore) => {
  const query = fs.readFileSync(filePath, 'utf8').split('\n').filter(line => line[0] !== '#' && line.length);
  const COLLECTION_NAME = query[0];
  query.shift();

  let collectionRef = firestore.collection(COLLECTION_NAME);
  query.forEach((line) => {
    const components = line.split(' ');
    collectionRef = collectionRef.where(components[0], components[1], parseClauseValue(components[2]));
  });
  return collectionRef.get();
};

module.exports = { queryBuilder };

