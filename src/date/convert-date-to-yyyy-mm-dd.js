const convertDateToYYYYMMDD = () => {
  return {
    prefix: ["convert a date to yyyy-mm-dd", "convert-yyyy-mm-dd"],
    body: "const ${1:result} = ${date} => ${date}.toISOString().slice(0, 10);$0",
    description: "Convert a date to YYYY-MM-DD format",
  };
};

module.exports = { convertDateToYYYYMMDD };
