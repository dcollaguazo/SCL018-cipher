const cipher = {
  encode: (n,txt) => {
    n = parseInt(n);
    txt = txt.toUpperCase();
    let result = '';

    if (n!==0||txt!==''|| Number.isInteger(n)){      
      for (let i=0; i < txt.length; i++){
        let encodedChar = (txt.charCodeAt(i)-65+n)%26;
        if(encodedChar < 0) encodedChar += 26;
        result += String.fromCharCode(encodedChar + 65)
      }
      }
      return result;
    },

  decode: (n,txtToDecode) => {
    n = parseInt(n);
    txtToDecode = txtToDecode.toUpperCase();
    let result = '';

    for (let i=0; i < txtToDecode.length; i++){
      let decodedChar = (txtToDecode.charCodeAt(i)-65-n)%26;
      if(decodedChar < 0) decodedChar += 26;
      result += String.fromCharCode(decodedChar + 65)

    }
    return result;
  }
};  
export default cipher;