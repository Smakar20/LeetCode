/*
Dota2 Senate

In the world of Dota2, there are two parties: the Radiant and the Dire.

The Dota2 senate consists of senators coming from two parties. Now the Senate wants to decide on a change in the Dota2 game. The voting for this change 
is a round-based procedure. In each round, each senator can exercise one of the two rights:

Ban one senator's right: A senator can make another senator lose all his rights in this and all the following rounds.
Announce the victory: If this senator found the senators who still have rights to vote are all from the same party, he can announce the victory and decide 
on the change in the game.
Given a string senate representing each senator's party belonging. The character 'R' and 'D' represent the Radiant party and the Dire party. Then if there 
are n senators, the size of the given string will be n.

The round-based procedure starts from the first senator to the last senator in the given order. This procedure will last until the end of voting. All the 
senators who have lost their rights will be skipped during the procedure.

Suppose every senator is smart enough and will play the best strategy for his own party. Predict which party will finally announce the victory and change 
the Dota2 game. The output should be "Radiant" or "Dire".

Example 1:
Input: senate = "RD"
Output: "Radiant"
Explanation: 
The first senator comes from Radiant and he can just ban the next senator's right in round 1. 
And the second senator can't exercise any rights anymore since his right has been banned. 
And in round 2, the first senator can just announce the victory since he is the only guy in the senate who can vote.

Example 2:
Input: senate = "RDD"
Output: "Dire"
Explanation: 
The first senator comes from Radiant and he can just ban the next senator's right in round 1. 
And the second senator can't exercise any rights anymore since his right has been banned. 
And the third senator comes from Dire and he can ban the first senator's right in round 1. 
And in round 2, the third senator can just announce the victory since he is the only guy in the senate who can vote.
 
Constraints:
n == senate.length
1 <= n <= 10^4
senate[i] is either 'R' or 'D'.
*/

var predictPartyVictory = function(senate) {
  const [dQueue, rQueue] = [[], []];
  // Populate the Queues
  for (let i = 0; i < senate.length; i++) {
      if (senate[i] == 'R') {
          rQueue.push(i);
      } else {
          dQueue.push(i);
      }
  }

  let curIdx = 0;

  while (rQueue.length > 0 && dQueue.length > 0) {
     if (senate[curIdx] === 'R' && curIdx === rQueue[0]) {
         dQueue.shift();
         let curR = rQueue.shift();
         rQueue.push(curR);
     } else if (senate[curIdx] === 'D' && curIdx === dQueue[0]) {
         rQueue.shift();
         let curD = dQueue.shift();
         dQueue.push(curD);
     }
     curIdx = (curIdx + 1) % senate.length;
  }

  return (dQueue.length === 0) ? 'Radiant' : 'Dire';
};

// ----------------------- another way 1 -----------------------------
var predictPartyVictory = function(senate) {
  const [dQueue, rQueue] = [[], []];
  let bannedIdx = new Set();

  // Populate the Queues
  for (let i = 0; i < senate.length; i++) {
      if (senate[i] == 'R') {
          rQueue.push(i);
      } else {
          dQueue.push(i);
      }
  }

  const ban = (queue, startIdx) => {
      let removableIdx = queue.findIndex(x => x >= startIdx);

      if (removableIdx === -1) {
          bannedIdx.add(queue[0]);
          queue.shift();
      } else {
          bannedIdx.add(queue[removableIdx]);
          queue.splice(removableIdx, 1);
      }
  };

  let curIdx = 0;

  while (rQueue.length > 0 && dQueue.length > 0) {
     if (!bannedIdx.has(curIdx)) {
         if (senate[curIdx] === 'R') ban(dQueue, curIdx);
         else ban(rQueue, curIdx);
     }
     curIdx = (curIdx + 1) % senate.length;
  }

  return (dQueue.length === 0) ? 'Radiant' : 'Dire';
};

//---------------------------- another way 2 --------------------------------
var predictPartyVictory = function(senate) {
  const [dQueue, rQueue] = [[], []];

  // Populate the Queues
  for (let i = 0; i < senate.length; i++) {
      if (senate[i] == 'R') {
          rQueue.push(i);
      } else {
          dQueue.push(i);
      }
  }

  while (rQueue.length > 0 && dQueue.length > 0) {
      // Pop the Next-Turn Senate from both Q.
      let rTurn = rQueue.shift();
      let dTurn = dQueue.shift();

      // ONE having a larger index will be banned by a lower index
      // Lower index will again get Turn, so EN-Queue again
      // But ensure its turn comes in the next round only
      if (dTurn < rTurn) {
          dQueue.push(dTurn + senate.length);
      } else {
          rQueue.push(rTurn + senate.length);
      }
  }

  return (dQueue.length === 0) ? 'Radiant' : 'Dire';
};
