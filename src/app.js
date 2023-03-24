/* eslint-disable */

const pronoun = ["the", "our"];
const adj = ["great", "big"];
const noun = ["jogger", "racoon", "cactus", "sitcom", "clarinet", "portfolio"];
const extensions = [".com", ".net", ".us", ".io"];

const domains = [];

for (let a = 0; a < adj.length; a++) {
  for (let p = 0; p < pronoun.length; p++) {
    for (let n = 0; n < noun.length; n++) {
      for (let e = 0; e < extensions.length; e++) {
        domains.push(pronoun[p] + adj[a] + domainHack(noun[n], extensions[e]));
      }
    }
  }
}

console.table(domains);

function domainHack(noun, extension) {
  const extensionFiltered = noDotExtension(extension);
  const size = extensionFiltered.length;
  const nounSliced = nounSlicer(noun, size);

  return nounSliced[1] === extensionFiltered
    ? nounSliced.join(".")
    : noun + extension;
}

function nounSlicer(noun, size) {
  return [noun.slice(0, noun.length - size), noun.slice(size * -1)];
}

function noDotExtension(extension) {
  return extension.slice(1);
}
