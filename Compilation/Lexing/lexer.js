function tokenize(input) {
  // List of tokens to return
  const tokens = [];

  // Current position in the input
  let current = 0;

  // Keywords in our language
  const keywords = [
    "function",
    "var",
    "let",
    "const",
    "if",
    "else",
    "return",
    "for",
    "while",
  ];

  // Helper to check if a character is alphanumeric or underscore (valid for identifiers)
  function isAlphaNumeric(char) {
    return /[a-zA-Z0-9_]/.test(char);
  }

  // Whitespace characters
  function isWhitespace(char) {
    return /\s/.test(char);
  }

  // Process the input until we reach the end
  while (current < input.length) {
    let char = input[current];

    // Handle whitespace - just skip it
    if (isWhitespace(char)) {
      current++;
      continue;
    }

    // Handle punctuation
    if (
      char === "(" ||
      char === ")" ||
      char === "{" ||
      char === "}" ||
      char === "." ||
      char === ","
    ) {
      tokens.push({
        type: "punctuation",
        value: char,
      });
      current++;
      continue;
    }

    // Handle strings
    if (char === '"' || char === "'") {
      const quote = char;
      let value = "";

      // Skip the opening quote
      current++;

      // Keep going until we hit the closing quote
      while (input[current] !== quote && current < input.length) {
        value += input[current];
        current++;
      }

      // Skip the closing quote
      current++;

      tokens.push({
        type: "string",
        value: value,
      });
      continue;
    }

    // Handle identifiers and keywords
    if (/[a-zA-Z_]/.test(char)) {
      let value = "";

      // Keep reading as long as we see alphanumeric characters
      while (current < input.length && isAlphaNumeric(input[current])) {
        value += input[current];
        current++;
      }

      // Check if it's a keyword or an identifier
      const type = keywords.includes(value) ? "keyword" : "identifier";

      tokens.push({
        type: type,
        value: value,
      });
      continue;
    }

    // If we've reached this point, we don't recognize the character
    // In a real lexer, we'd throw an error here
    current++;
  }

  return tokens;
}

// Test with the given example
const code = `function helloWorld() {
  console.log("Hello World!")
}`;

const tokens = tokenize(code);
console.log(JSON.stringify(tokens, null, 2));
