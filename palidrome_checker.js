function palindrome(str) {

    let regex = /[^.\\\!\@\#\$\%\¨\&\*\(\)\_\-\,\;\:\?\]\[\/\r\t\s]/ig;
    let strReg = str.match(regex);
  
    let strTemp = "";
    let tempStr = "";
    for (let i = 0; i < strReg.length; i++) {
       tempStr += strReg[strReg.length - (i+1)];
       strTemp += strReg[i];
    }
  
    if(strTemp.toUpperCase() == tempStr.toUpperCase()){
      return true;
    }
    return false;
}
  
palindrome("eye");