const joinNames = (namesObj) => {
  return namesObj.map(a => a.name).join(', ').replace(/, ([^,]*)$/, ' & $1');
};

module.exports = joinNames;
