function rot13(str) {
    let arr = str.split('');
    let letters = /[A-Z]/;
    let final = "";
    arr.map(function(val){
        if (letters.test(val)){
            if (val.charCodeAt(0) <= 77){
                final += String.fromCharCode(val.charCodeAt(0)+13);
            } else if (val.charCodeAt(0) >= 77){
                final += String.fromCharCode(val.charCodeAt(0)-13);
            }
        } else {
            final += val;
        }
    })
    console.log(final);
    return final;
  }

//Example Function Calls:
rot13("SERR PBQR PNZC");
rot13("SERR CVMMN");
rot13("SBYYBJ NYRP-UHNAT-YNOF BA TVGUHO!!")
//Your Function Calls (CAPITAL LETTERS ONLY):
