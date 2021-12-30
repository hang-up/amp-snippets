/* eslint-disable global-require, import/no-dynamic-require */
const { readdir, writeFile } = require("fs/promises");
const path = require("path");

/**
 * Capitalize a string.
 *
 * @param {String} string String to capitalize
 * @returns String
 */
const capitalize = (string) => {
  return `${string.charAt(0).toUpperCase()}${string.slice(1)}`;
};

/**
 * Returns a capitalized formatted string from a kebab cased entry.
 *
 * @param {String} kebab String to transform
 * @returns String
 */
const kebabToHuman = (kebab) => {
  const splitted = kebab.split("-").join(" ");
  return capitalize(splitted);
};

/**
 * Writes to snippets/snippets.json.
 *
 * @param {Object} content Content to save
 */
const save = async (content) => {
  await writeFile(
    path.resolve(__dirname, "../snippets/snippets.json"),
    JSON.stringify(content)
  );
};

/**
 * ENTRY POINT.
 * Bundles all entries from src/*, do a bunch of processing & save them into snippets/snippets.json.
 */
(async () => {
  try {
    const namespaces = await readdir(path.join(__dirname, "../src"));

    const namespacedSnippets = namespaces.map(async (ns) => {
      const nsPath = path.join(__dirname, `../src/${ns}`);
      const filePaths = await readdir(nsPath);

      // Dynamically import all snippets & redact them to be prefixed & namespaced.
      const imported = filePaths.map((file) => {
        const content = require(`${nsPath}/${file}`);
        const { prefix, ...rest } = content[Object.keys(content)[0]]();
        const key = `${capitalize(ns)}: ${kebabToHuman(
          file.substring(0, file.length - 3)
        )}`;

        const snippet = {
          [key]: {
            prefix: prefix.map((p) => `&:${p}`),
            ...rest,
          },
        };
        return snippet;
      });
      return imported;
    });

    const resolved = (await Promise.all(namespacedSnippets)).flat(Infinity);

    const output = resolved.reduce((carry, current) => {
      const [key] = Object.keys(current);
      const [value] = Object.values(current);
      return {
        ...carry,
        [key]: value,
      };
    }, {});

    await save(output);
  } catch (e) {
    console.error(e);
  }
})();
