import cipher from './cipher.js';

const txtToEncode = document.getElementById('txtToEncode');
const offset = document.getElementById('txtOffset');
const txtToDecode = document.getElementById('txtToDecode');

document.getElementById('btnToEncode').addEventListener('click', () => {
  const d = cipher.encode(offset.value, txtToEncode.value);
  document.getElementById('txtToDecode').value = d
});

document.getElementById('btnToDecode').addEventListener('click', () => {
  cipher.decode(offset.value, txtToDecode.value);
  document.getElementById('txtToDecode').value;
});
