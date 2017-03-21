function convertToLetters(number){
     var str = number.toString();
     var length = str.length;
     var nepaliStr = [];
     if(length > 3){

        // get last three digits of given number 
     	var lastThree = str.lastThree();

        // remove last three digit and take remaining digits
     	var remStr = str.removeLastThree();

        // get length of remaining digits in number
     	var remStrLength = remStr.length;

        // make a array 
     	var remStrips = lastThree.sliceToTwo().concat(remStr.sliceToTwo());
   
        //reverse the array and join
        nepaliStr = remStrips.reverseAndJoin();
    }
    else{

      remStrips = str.sliceToTwo();
 	  nepaliStr = remStrips.reverseAndJoin();
 }

return nepaliStr;

}

