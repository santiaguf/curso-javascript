/* eslint-disable no-console */
const isVowel = require('../src/isVowel');

console.log('debería devolver true para letra a');
if (isVowel('a') === true) {
  console.log('✓ ok');
} else {
  console.error('✗ fail');
}

console.log('debería devolver false para letra b');
if (isVowel('b') === false) {
  console.log('✓ ok');
} else {
  console.error('✗ fail');
}
