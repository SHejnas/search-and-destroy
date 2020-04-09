"use strict";

// Complete this algo
const minJumps = (arr) => {
  if (arr.length === 0) return 0;

  let idx = 0;
  let counter = 0;

  while (idx < arr.length - 1) {
    //how far we can jump from where we are standing
    let jumpDistance = arr[idx];

    //can we jump to the end
    if (jumpDistance + idx >= arr.length - 1) {
      return ++counter;
    } else {
      //values of spaces that we can jump to
      let jumpZone = arr.slice(idx + 1, idx + jumpDistance + 1);

      //highest number that we can jump to
      let nextHighestJump = Math.max(...jumpZone);

      //jump! to the new index with the highest value
      idx = idx + 1 + jumpZone.indexOf(nextHighestJump);

      //record the jump
      counter++;
    }
  }
};

module.exports = minJumps;
