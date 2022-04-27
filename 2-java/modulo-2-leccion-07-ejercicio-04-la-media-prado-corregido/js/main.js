"use strict";
const list1 = [1, 6, 3324, 234, 2, 234];
const list2 = [4, 6, 37, 8, 9, 7, 9];

function average(list) {
  let sum = 0;
  for (let i = 0; i < list.length; i++) {
    sum += list[i];
  }
  const averageNum = sum / list.length;
  console.log(averageNum);
  return averageNum;
}

average(list2);
