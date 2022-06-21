/**
 * 题目链接：
 * https://leetcode.cn/problems/defanging-an-ip-address/
 *
 * @param {string} address
 * @return {string}
 */
function defangIPaddr(address) {
  return address.replaceAll('.', '[.]');
};
