const getYesterdayDate = () => {
  return {
    prefix: ["get yesterday date"],
    body: "const ${yesterday} = new Date(new Date().valueOf() - 1000 * 60 * 60 * 24);$0",
    description: "Get yesterday's date",
  };
};

module.exports = { getYesterdayDate };
