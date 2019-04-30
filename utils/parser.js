const isDate = (date) => {
  return (new Date(date) !== "Invalid Date") && (date.indexOf('-') >= 0);
}

const isBoolean = (bool)=>{
  return bool === 'true' || bool === 'false';
}

const isNull = (str) => {
  return str === 'null' ? true : false
}

const parseClauseValue = (clause) => {
  if (isDate(clause)){
    return new Date(clause);
  }
  if(!isNaN(clause)){
    return Number.parseFloat(clause)
  }
  if(isBoolean(clause)){
    return clause === 'true'
  }
  if(isNull(clause)) {
    return null
  }
  return clause;
};

module.exports = {parseClauseValue}