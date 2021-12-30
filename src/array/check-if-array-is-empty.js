const checkIfArrayIsEmpty = () => {
  return {
    prefix: ["check if array is empty", "empty-array"],
    body: "const ${1:result} = ${array} => Array.isArray(${array}) && ${array}.length;$0",
    description: "Check if an array is empty",
  };
};

module.exports = { checkIfArrayIsEmpty };
