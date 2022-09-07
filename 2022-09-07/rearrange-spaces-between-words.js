/**
 * 题目链接：
 * https://leetcode.cn/problems/rearrange-spaces-between-words/
 *
 */

/**
 * @param {string} text
 * @return {string}
 */
const reorderSpaces = (text) => {
  text += ' ';
  const words = [];
  let wordSize = 0;
  let word = '';
  for (const c of text) {
    if (c === ' ') {
      if (word.length) {
        words.push(word);
        wordSize += word.length;
        word = '';
      }
    } else {
      word += c;
    }
  }


  const spaceSize = text.length - wordSize - 1;
  const gapSize = words.length > 1 ? Math.floor(spaceSize / (words.length - 1)) : 0;
  const restSapceSize = spaceSize - gapSize * (words.length - 1);

  let res = words.join(' '.repeat(gapSize));

  if (restSapceSize) {
    res += ' '.repeat(restSapceSize);
  }

  return res;
};
