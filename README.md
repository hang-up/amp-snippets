<h2 align="center">&: Amp snippets</h2>

This extension contains familiar utility one-liners (most of the time) for VS Code.

## Motivation
Catered for a human workflow, you can call each snippet from a comprehensive description of what you are trying to achieve.  
Instead of remembering the difference between `fre`, `fof` and `fin` (which are respectively shortcuts for `forEach`, `for ... of`, `for ... in` loops [from this very famous extension](https://marketplace.visualstudio.com/items?itemName=xabikos.JavaScriptSnippets)), type in for example a more natural `&:check if array is empty` and this will output a dynamic snippet:
```
const ${1:result} = ${array} => Array.isArray(${array}) && ${array}.length;
```

## Contributing
Contributions are welcomed! If you're interested in contributing, please read the [contributing docs](https://github.com/hang-up/amp-snippets/blob/main/.github/CONTRIBUTING.md) before submitting a pull request.
