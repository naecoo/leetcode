const { execSync } = require('child_process');

const zero = (n) => n > 9 ? n : `0${n}`;
const date = new Date();
const dateName = `${date.getFullYear()}/${zero(date.getMonth() + 1)}/${zero(date.getDate())}`;

execSync('git add .');
execSync(`git commit -m'${dateName}'`);
