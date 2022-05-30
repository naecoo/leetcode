const { resolve } = require('path');
const { mkdir } = require('fs');

const zero = (n) => n > 9 ? n : `0${n}`;
const date = new Date();
const dirName = `${date.getFullYear()}-${zero(date.getMonth() + 1)}-${zero(date.getDate())}`;
mkdir(resolve(__dirname, '../', dirName), (err) => {
  if (err) {
    console.log('文件夹已经存在');
  }
});
