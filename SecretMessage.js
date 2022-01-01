let secretMessage = ['Learning', 'is', 'not', 'about', 'what', 'you', 'get', 'easily', 'the', 'first', 'time,', 'it', 'is', 'about', 'what', 'you', 'can', 'figure', 'out.', '-2015,', 'Chris', 'Pine,', 'Learn', 'JavaScript'];
console.log(secretMessage.length);
secretMessage.pop();

console.log(secretMessage.length);

secretMessage.push('to','Program');

secretMessage[secretMessage.indexOf('easily')] = 'right';
// console.log(secretMessage);

secretMessage.shift();

secretMessage.unshift('Programming');

const theIndex = secretMessage.indexOf('get');
console.log(theIndex); // 6
secretMessage.splice(6, 5);
let part1 = secretMessage.splice(0, 6);
part1.push('know');
secretMessage = part1.concat(secretMessage);
console.log(secretMessage);
console.log(secretMessage.join(' '));

