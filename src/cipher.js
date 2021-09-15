const cipher = {

  encode: (n, txt) => {
    let result = '';
    const offset = n;
    if (offset !== 0 || txt !== '' || Number.isInteger(offset)) {
      for (let i = 0; i < txt.length; i++) {
        let ascii = txt[i].charCodeAt();
        // checking if character is Uppercase
        if (ascii >= 65 && ascii <= 90) {
          result += String.fromCharCode(((ascii - 65 + offset) % 26) + 65);
          // checking if character is lowercase
        } else if (ascii >= 97 && ascii <= 122) {
          result += String.fromCharCode(((ascii - 97 + offset) % 26) + 97);
        } else {
          result += txt[i];
        }
      }
    }

    return result;
  },

  decode: (n, txt) => {
    let result = '';
    const offset = n;

    if (offset !== 0 || txt !== '' || Number.isInteger(offset)) {
      for (let i = 0; i < txt.length; i += 1) {
        let ascii = txt.charCodeAt(i);

        if (ascii >= 65 && ascii <= 90) {
          let decodedChar = (ascii - 65 - offset) % 26;
          if (decodedChar < 0) decodedChar += 26;
          result += String.fromCharCode(decodedChar + 65);
        } else if (ascii >= 97 && ascii <= 122) {
          let decodedChar = (ascii - 97 - offset) % 26;
          if (decodedChar < 0) decodedChar += 26;
          result += String.fromCharCode(decodedChar + 97);
        } else {
          result += txt[i];
        }
      }
    }
    return result;
  },
};
export default cipher;
