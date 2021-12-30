const createAnEmptyFunction = () => {
  return {
    prefix: ["create an empty function", "noop"],
    body: "const noop = () => {}$0",
    description: "Create an empty function",
  };
};

module.exports = { createAnEmptyFunction };
