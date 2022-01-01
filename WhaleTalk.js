let input = "Oranges and Lemons";
const vowels = ['a', 'e', 'i', 'o', 'u'];
let resultArray = [];
for (i = 0; i < input.length; i++) {
  // console.log(i) // 0 - 20
  for (j = 0; j < vowels.length; j++) {
    if (input[i] === vowels[j]) {      
      resultArray.push(vowels[j]);
      if (vowels[j] === 'e' || vowels[j] === 'u'){
        resultArray.push(vowels[j]);
      }
    }

  }
}
console.log(resultArray);
console.log((resultArray.join('')).toUpperCase());
