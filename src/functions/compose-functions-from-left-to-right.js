const composeFunctionsFromLeftToRight = () => {
  return {
    prefix: [
      "compose functions from left to right",
      "compose-left-right",
      "pipe",
    ],
    body: "const pipe = (...funcs) => x => funcs.reduce((carry, current) => current(carry), x);$0",
    description: "Compose functions from left to right",
  };
};

module.exports = { composeFunctionsFromLeftToRight };
