const fs = require('fs');
const { parseClauseValue } = require('./utils/parser');

const filePath = './queries/query.txt';

const queryBuilder = (firestore) => {
  const query = fs.readFileSync(filePath, 'utf8').split('\n').filter(line => line.length && line[0] !== '#');
  const COLLECTION_NAME = query[0];
  query.shift();

  let collectionRef = firestore.collection(COLLECTION_NAME);
  query.forEach((line) => {
    const components = line.split(',');
    const [field, operator, value] = components.map(item => item.trimLeft().trimRight());
    collectionRef = collectionRef.where(field, operator, parseClauseValue(value));
  });
  return collectionRef.get();
};

module.exports = { queryBuilder };

