const deepClone = () => {
  return {
    prefix: ["clone an array", "clone-array"],
    body: "const ${1:result} = JSON.parse(JSON.stringify(${array}));$0",
    description: "Deeply clone an array",
  };
};

module.exports = { deepClone };
