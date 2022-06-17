// 大数相加
function add(num1, num2) {
  const ch1 = num1.toString().split('');
  const ch2 = num2.toString().split('');
  let len1 = ch1.length - 1;
  let len2 = ch2.length - 1;
  let carry = 0;
  const res = [];

  while (len1 >= 0 || len2 >= 0) {
    const n1 = len1 >= 0 ? +ch1[len1--] : 0;
    const n2 = len2 >= 0 ? +ch2[len2--] : 0;
    const r = carry + n1 + n2;
    res.push(r % 10);
    carry = Math.floor(r / 10);
  }
  if (carry) {
    res.push(carry);
  }
  return res.reverse().join('');
}
console.log(
  add(123, 7700)
)
