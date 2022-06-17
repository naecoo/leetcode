/**
 * 题目链接：
 * https://leetcode.cn/problems/validate-ip-address/
 *
 * @param {string} queryIP
 * @return {string}
 */
function validIPAddress(queryIP) {
  if (queryIP.includes('.')) {
    if (isIPv4(queryIP)) {
      return 'IPv4';
    }
  } else if (isIPv6(queryIP)) {
    return 'IPv6';
  }

  return 'Neither';
}
const IPv4RE = /^\d{1,3}$/;
const IPv6RE = /^[\da-fA-F]{1,4}$/;
function isIPv4(queryIP) {
  const s = queryIP.split('.');
  if (s.length !== 4) return false;
  for (let i = 0; i < 4; i++) {
    if (!IPv4RE.test(s[i])) return false;
    if (s[i].length > 1 && s[i][0] === '0') return false;
    const num = parseInt(s[i]);
    if (isNaN(num) || num < 0 || num > 255) return false;
  }
  return true;
}
function isIPv6(queryIP) {
  const s = queryIP.split(':');
  if (s.length !== 8) return false;
  for (let i = 0; i < 8; i++) {
    if (!IPv6RE.test(s[i])) return false;
    const num = parseInt(`0x${s[i]}`);
    if (isNaN(num)) return false;
  }
  return true;
}
