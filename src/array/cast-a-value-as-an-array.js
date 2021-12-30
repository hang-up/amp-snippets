const castAValueAsAnArray = () => {
  return {
    prefix: ["cast a value as an array", "cast-array"],
    body: "const ${1:result} = ${value} => (Array.isArray(${value} ? ${value} : [${value}]));$0",
    description: "Cast a value as an array",
  };
};

module.exports = { castAValueAsAnArray };
