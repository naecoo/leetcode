/**
 * 题目链接：
 * https://leetcode.cn/problems/replace-words/
 *
 * @param {string[]} dictionary
 * @param {string} sentence
 * @return {string}
 */
function replaceWords(dictionary, sentence) {
  const trie = new Trie();
  // 生成字典树
  for (const word of dictionary) {
    let cur = trie;
    for (let i = 0; i < word.length; i++) {
      const c = word[i];
      if (!cur.children.has(c)) {
        cur.children.set(c, new Trie());
      }
      cur = cur.children.get(c);
    }
    // 标记单词结尾
    cur.children.set('#', null);
  }

  const words = sentence.split(" ");
  // 每个单词寻找最短路径即可
  for (let i = 0; i < words.length; i++) {
    words[i] = findRoot(words[i], trie);
  }
  return words.join(" ");
};

function findRoot(word, trie) {
  let root = '';
  let cur = trie;
  for (let i = 0; i < word.length; i++) {
    const c = word[i];
    if (cur.children.has('#')) {
      return root;
    }
    if (!cur.children.has(c)) {
      return word;
    }
    root += c;
    cur = cur.children.get(c);
  }
  return root;
}

// 字典树节点
class Trie {
  constructor() {
    this.children = new Map();
  }
}
