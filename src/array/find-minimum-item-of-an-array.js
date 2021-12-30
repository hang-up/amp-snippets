const findMinimumItemOfAnArray = () => {
  return {
    prefix: ["find minimum item of an array", "find-min-array"],
    body: "const ${1:result} = ${array} => Math.min(...${array});$0",
    description: "Find the minimum item of an array",
  };
};

module.exports = { findMinimumItemOfAnArray };
