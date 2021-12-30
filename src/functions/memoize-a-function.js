const memoizeAFunction = () => {
  return {
    prefix: [
      "memoize a function",
      "store results of previous function calls and return the cached result",
      "memoize",
    ],
    body: `
const memoized = (fn) => {
  const cache = Object.create(null);
  return (arg) =>
    !cache[arg]
      ? (() => {
          cache[arg] = fn(arg);
          return cache[arg];
        })()
      : cache[arg];
};
`,
    description: "Memoize a function",
  };
};

module.exports = { memoizeAFunction };
