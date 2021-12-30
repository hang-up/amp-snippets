const findMaximumItemOfAnArray = () => {
  return {
    prefix: ["find maximum item of an array", "find-max-array"],
    body: "const ${1:result} = ${array} => Math.max(...${array});$0",
    description: "Find the maximum item of an array",
  };
};

module.exports = { findMaximumItemOfAnArray };
