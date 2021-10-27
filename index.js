//1
function betweenFiveAndTen(int){
  if(int>=5 && int<=10){
      return true;
  }
  return false;
}

//2
function betweenTenAndThirty(int){
   if(int>10 && int<=30){
      return true;
  }
  return false;
}

//3
function betweenThirtyAndFifty(int){
  if(int>=30 && int<=50){
      return true;
  }
  return false;
}


//4
function betweenThirtyFiftySeventy(int){
    if((int>=0 && int<=30) || (int>=50 && int<=70)){
        return true;
    }
    return false;
}

//5
function betweenTwentyFiftySixty(int){
   if((int>=0 && int<=20) || (int>=50 && int<=60)){
        return true;
    }
    return false;
}

//6
function betweenTenTwentyThirty(int){
   if((int>=0 && int<=10) || (int>=20 && int<=30)){
        return true;
    }
    return false;
}

// console.log(betweenFiveAndTen(5)) //returns true
// console.log(betweenFiveAndTen(15)) //returns false 
// console.log(betweenTenAndThirty(10)) //returns false
// console.log(betweenTenAndThirty(15)) //returns true
// console.log(betweenThirtyAndFifty(30)) //returns true
// console.log(betweenThirtyAndFifty(55)) //returns false
// console.log(betweenThirtyFiftySeventy(0)) //returns true
// console.log(betweenThirtyFiftySeventy(44)) //returns false
// console.log(betweenThirtyFiftySeventy(55)) //returns true
// console.log(betweenThirtyFiftySeventy(71)) //returns false
// console.log(betweenTwentyFiftySixty(12)) //returns true
// console.log(betweenTwentyFiftySixty(44)) //returns false
// console.log(betweenTwentyFiftySixty(55)) //returns true
// console.log(betweenTwentyFiftySixty(61)) //returns false
// console.log(betweenTenTwentyThirty(0)) //returns true
// console.log(betweenTenTwentyThirty(9)) //returns true
// console.log(betweenTenTwentyThirty(22)) //returns true
// console.log(betweenTenTwentyThirty(31)) //returns false