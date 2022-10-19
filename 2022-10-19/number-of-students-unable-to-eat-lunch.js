/**
 * 题目链接：
 * https://leetcode.cn/problems/number-of-students-unable-to-eat-lunch/
 *
 */

/**
 * @param {number[]} students
 * @param {number[]} sandwiches
 * @return {number}
 */
const countStudents = (students, sandwiches) => {
  const counts = [0, 0];
  students.forEach((item) => {
    counts[item]++;
  });

  for (const sandwich of sandwiches) {
    if (counts[sandwich] > 0) {
      counts[sandwich]--;
    } else {
      break;
    }
  }

  return counts[0] + counts[1];
};

const countStudents2 = (students, sandwiches) => {
  const counts = [0, 0];
  students.forEach((item) => {
    counts[1] += item;
  });
  counts[0] = students.length - counts[1];

  while (students.length) {
    if (students[0] === sandwiches[0]) {
      counts[sandwiches[0]]--;
      students.shift();
      sandwiches.shift();
    } else if (counts[sandwiches[0]] > 0) {
      students.push(students.shift());
    } else {
      break;
    }
  }

  return students.length;
};
