/**
 * 题目链接：
 * https://leetcode.cn/problems/unique-email-addresses/
 *
 * @param {string[]} emails
 * @return {number}
 */
function numUniqueEmails(emails) {
  const set = new Set();
  const re = /^.+\.@.+$/g;
  emails.forEach((email) => {
    const [local, domain] = email.split('@');
    let s = '';
    for (let i = 0; i < local.length; i++) {
      if (local[i] === '+') break;
      if (local[i] !== '.') {
        s += local[i];
      }
    }
    set.add(s + '@' + domain);
  });
  return set.size;
};
