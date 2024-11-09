//Exercise #2: At Least Five Function

function atLeastFive(array, operation) {
  // Start coding here
  let countAbove70 = array.filter(operation).length;
  if (countAbove70 >= 5){
    return 'ผ่านเกณฑ์';
  }else{
    return 'ไม่ผ่านเกณฑ์'
  }
  }

  function above70(scores){
    return scores>70;
  }


const studentScoresRoom1 = [90, 40, 67, 80, 100, 15, 86, 12, 99, 67];
const studentScoresRoom2 = [78, 98, 23, 15, 40, 12, 40, 67, 80, 100];
const studentScoresRoom3 = [67, 80, 100, 15, 12, 40, 67, 80, 100, 67];

// Using `atLeastFive` function here

let scoreRoom1Result = atLeastFive(studentScoresRoom1, above70);
let scoreRoom2Result = atLeastFive(studentScoresRoom2, above70);
let scoreRoom3Result = atLeastFive(studentScoresRoom3,above70);


console.log(`นักเรียนห้องที่ 1 ${(scoreRoom1Result)}`)
console.log(`นักเรียนห้องที่ 2 ${(scoreRoom2Result)}`)
console.log(`นักเรียนห้องที่ 3 ${(scoreRoom3Result)}`)