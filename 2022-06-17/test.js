// 大数相加
function add(num1, num2) {
  let i = num1.length - 1;
  let j = num2.length - 1;
  let carry = 0;
  const res = [];
  while (i >= 0 || j >= 0) {
    const n1 = i >= 0 ? +num1[i--] : 0;
    const n2 = j >= 0 ? +num2[j--] : 0;
    const r = carry + n1 + n2;
    res.push(r % 10);
    carry = Math.floor(r / 10);
  }
  if (carry) {
    res.push(carry);
  }
  return res.reverse().join('');
}

// 大数相减
function sub(num1, num2) {
  // 保证执行时，num1 > num2
  if (less(num1, num2)) {
    return `-${_sub(num2, num1)}`;
  } else {
    return _sub(num1, num2);
  }

  function less(num1, num2) {
    if (num1.length === num2.length) {
      return num1 < num2;
    } else {
      return num1.length < num2.length;
    }
  }
  function _sub(num1, num2) {
    // num1 一定大于等于 num2
    const res = [];
    let borrow = 0;
    let i = num1.length - 1, j = num2.length - 1;
    while (i >= 0 || j >= 0) {
      const x = i >= 0 ? parseInt(num1[i--]) : 0;
      const y = j >= 0 ? parseInt(num2[j--]) : 0;
      const z = (x - borrow - y + 10) % 10; // 减法，优化版本，保证不会低于0
      borrow = x - borrow - y < 0 ? 1 : 0; // 检查是否需要借位
      res.push(z);
    }
    // 删除前导0
    while (res.length > 1 && res[res.length - 1] === 0) {
      res.pop();
    }
    return res.reverse().join('');
  }
}


// 大数相乘
function multiply(num1, num2) {
  if (num1 === '0' || num2 === '0') return '0';

  const m = num1.length;
  const n = num2.length;
  const res = new Array(m + n).fill(0);

  for (let i = m - 1; i >= 0; i--) {
    for (let j = n - 1; j >= 0; j--) {
      const p1 = i + j;
      const p2 = i + j + 1;
      let sum = res[p2] + parseInt(num1[i]) * parseInt(num2[j]);
      res[p1] += Math.floor(sum / 10);
      res[p2] = sum % 10;
    }
  }
  if (res[0] === 0) res.shift();
  return res.join('');
}
