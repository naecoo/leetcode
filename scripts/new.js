const { resolve, basename } = require('path');
const { mkdir, writeFile } = require('fs');

const zero = (n) => (n > 9 ? n : `0${n}`);
const date = new Date();
const dirName = `${date.getFullYear()}-${zero(date.getMonth() + 1)}-${zero(date.getDate())}`;
mkdir(resolve(__dirname, '../', dirName), (err) => {
  if (err) {
    console.log('文件夹已经存在');
  }
});

const args = process.argv.slice(2);
if (args.length > 0) {
  const jsFile = `${basename(args[0])}.js`;
  const content = `/**
 * 题目链接：
 * https://leetcode.cn/problems/${basename(args[0])}/
 *
 */`;
  writeFile(resolve(__dirname, '../', dirName, './', jsFile), content, (err) => {
    if (err) {
      console.log(`${jsFile} 文件已经存在`);
    }
  });
}
