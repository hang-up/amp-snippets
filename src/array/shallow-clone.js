const shallowClone = () => {
  return {
    prefix: ["clone an array (shallow)", "shallow-clone-array"],
    body: "const ${1:result} = ${array} => [...${array}]$0",
    description: "Shallow clone an array (nested objects/arrays not cloned)",
  };
};

module.exports = { shallowClone };
