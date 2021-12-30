const composeFunctionsFromRightToLeft = () => {
  return {
    prefix: [
      "compose functions from right to left",
      "compose-right-left",
      "pipe",
    ],
    body: "const pipe = (...funcs) => x => funcs.reduceRight((carry, current) => current(carry), x);$0",
    description: "Compose functions from right to left",
  };
};

module.exports = { composeFunctionsFromRightToLeft };
