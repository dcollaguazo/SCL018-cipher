import cipher from './cipher.js';

let txtToEncode = document.getElementById('txtToEncode');
let offset = document.getElementById('txtOffset');
let txtToDecode = document.getElementById('txtToDecode');

document.getElementById("btnToEncode").addEventListener('click', () => {
    cipher.encode(offset.value,txtToEncode.value);
});

document.getElementById('btnToDecode').addEventListener("click", () => {
    let d = cipher.decode(offset.value, txtToDecode.value);
    document.getElementById("txtToDecode").value = d;
});



console.log(cipher);