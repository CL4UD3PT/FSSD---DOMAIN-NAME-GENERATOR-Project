// const dataset = [pronoun, adj];

// console.log(domainConstructor(dataset));

// function domainConstructor(data) {
//   let aux = null;
//   for(let i = 0; i < )
// }

// ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

// adj.forEach(a => {
//   pronoun.forEach(p => {
//     noun.forEach(n => {
//       extensions.forEach(e => {
//         // domains.push(pronoun[p] + adj[a] + domainHack(noun[n], extensions[e]));
//         domains.push(`${a}${p}${domainHack(n, e)}`);
//       });
//     });
//   });
// });

// function domainHack(noun, arr) {
//   let extension = null;

//   for (let i = 0; i < arr.length; i++) {
//     extension = arr[i];
//     const extensionFiltered = noDotExtension(arr[i]);
//     const size = extensionFiltered.length;
//     const nounSliced = nounSlicer(noun, size);

//     if (nounSliced[1] === extensionFiltered) return nounSliced.join(".");
//   }
//   return noun + extension;
// }
