const removeDuplicateValuesInAnArray = () => {
  return {
    prefix: ["remove duplicate values in an array", "remove-duplicate-array"],
    body: "const ${result} = (${array}) => ${array}.filter((i) => ${array}.indexOf(i) === ${array}.lastIndexOf(i));$0",
    description: "Remove duplicate values in an array",
  };
};

module.exports = { removeDuplicateValuesInAnArray };
