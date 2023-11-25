const number = parseInt(prompt('Number of candidates.'));
let candidates = [];
for (let i = 0; i < number; i++) {
  let name = prompt(`Name for candidate ${i + 1}`);
  candidates.push({
    name: name,
    votes: 0,
  });
}
function vote(name) {
  for (let candidate of candidates) {
    if (candidate['name'] === name) {
      candidate['votes'] += 1;
    }
  }
}
const voter = parseInt(prompt('Number of voters.'));
for (let i = 0; i < voter; i++) {
  let vote_name = prompt('Enter candidate name you vote.');
  if (vote_name !== '') {
    vote(vote_name);
  }
}
candidates.sort(function(a, b) {
  return b.votes - a.votes;
});
console.log(`The winner is ${candidates[0]['name']} with ${candidates[0]['votes']} votes.`);
console.log('results:');
for (let candidate of candidates) {
  console.log(`${candidate['name']}: ${candidate['votes']} votes`);
}