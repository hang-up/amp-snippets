const getTomorrowDate = () => {
  return {
    prefix: ["get tomorrow date"],
    body: "const ${tomorrow} = new Date(new Date().valueOf() + 1000 * 60 * 60 * 24);$0",
    description: "Get tomorrow's date",
  };
};

module.exports = { getTomorrowDate };
