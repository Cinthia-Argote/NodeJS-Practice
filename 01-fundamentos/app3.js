const fs = require('fs');

const content = fs.readFileSync('README.MD', 'utf-8')

const words = content.split(' ');

const re = new RegExp(/react/,'i');
const reactWordCount1s = words.filter(item => re.test(item));
const reactWordCount = content.match(/react/gi ?? [])



console.log('Palabras: ', words.length);
console.log('React Palabras', reactWordCount.length);