const TOO_CHAOTIC = "Too chaotic";
let total = 0;

for (let current_pos = 0; current_pos < q.length; current_pos++) {
  // O(n)
  // getting original position using 0 indexing (starts at 0)
  const original_pos = q[current_pos] - 1;

  // diff = how far person has moved
  const diff = original_pos - current_pos;
  // if person has moved more than 2 spots, then impossible
  if (diff > 2) return console.log(TOO_CHAOTIC);

  // if statement not required, but shows understanding
  if (diff <= 0) {
    // check each person starting from one person ahead of original pos
    // up until current position
    for (let i = Math.max(0, original_pos - 1); i < current_pos; i++) {
      // O(logn)
      const start_pos_of_forward_person = q[i] - 1;
      // if a person in front of current person started BEHIND
      // current person, then current person MUST have been bribed by them
      if (start_pos_of_forward_person > original_pos) {
        total++;
      }
    }
  }
}

console.log(total); // Time Complexity = O(n) * O(logn) = O(nlogn)
