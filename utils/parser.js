const isDate = date => (new Date(date) !== 'Invalid Date') && (date.indexOf('-') >= 0);

const isBoolean = bool => bool.toLowerCase() === 'true' || bool.toLowerCase() === 'false';

const isNull = str => (str === 'null');

const parseClauseValue = (clause) => {
  if (isDate(clause)) {
    return new Date(clause);
  }
  if (!isNaN(clause)) {
    return Number.parseFloat(clause);
  }
  if (isBoolean(clause)) {
    return clause === 'true';
  }
  if (isNull(clause)) {
    return null;
  }
  return clause;
};

const parseClauseOperator = (operator) => {

};

module.exports = { parseClauseValue, parseClauseOperator };
