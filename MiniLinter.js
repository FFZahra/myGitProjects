let story = 'Last weekend, I took literally the most beautiful bike ride of my life. The route is called "The 9W to Nyack" and it actually stretches all the way from Riverside Park in Manhattan to South Nyack, New Jersey. It\'s really an adventure from beginning to end! It is a 48 mile loop and it basically took me an entire day. I stopped at Riverbank State Park to take some extremely artsy photos. It was a short stop, though, because I had a really long way left to go. After a quick photo op at the very popular Little Red Lighthouse, I began my trek across the George Washington Bridge into New Jersey.  The GW is actually very long - 4,760 feet! I was already very tired by the time I got to the other side.  An hour later, I reached Greenbrook Nature Sanctuary, an extremely beautiful park along the coast of the Hudson.  Something that was very surprising to me was that near the end of the route you actually cross back into New York! At this point, you are very close to the end.';

let overusedWords = ['really', 'very', 'basically'];

let unnecessaryWords = ['extremely', 'literally', 'actually' ];

const storywords = story.split(' ');
console.log(`There are ${storywords.length} words in the story.`);
// console.log(storywords);

const betterwords = storywords.filter(word =>  !unnecessaryWords.includes(word))
console.log(`${betterwords.length} betterwords.`);
console.log(`These are the better words in the story: ${betterwords}`)

console.log(` `);
const overusedArr = storywords.filter(word =>  overusedWords.includes(word))

uniqueOverused = [];
for (let itm of overusedArr) {
  if (!uniqueOverused.includes(itm)) {
    uniqueOverused.push(itm);    
  };
}

const uniqueCount = [];
for (let itm of uniqueOverused) {
  let kount = 0;
  for (let i = 0; i < overusedArr.length; i++) {
    if(itm === overusedArr[i]){
      kount++;
    }
  }
  uniqueCount.push(`${itm} ${kount} time(s)`)
}

console.log(`Number of overused words: ${overusedArr.length}`);
console.log('These are the overused words:');
console.log(uniqueOverused);
// console.log(overusedArr);
console.log(uniqueCount);
console.log(`  `);

let testString = 'I got to the other side. An hour later, I reached Greenbrook. I had a really long way left to go.';
const eachChr = story.split('');
// console.log(`${eachChr}`);

let fullStops = eachChr.filter(chr => chr === '.' || chr === '!');
console.log(`Story statistics:`)
console.log(`Word count: ${storywords.length}`)
console.log(`Sentence count: ${fullStops.length}`)








