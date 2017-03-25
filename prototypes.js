
String.prototype.lastThree = function(){
	return this.substr(this.length - 3);
};
String.prototype.sliceToTwo = function(){
	var sliced = [];
	var number = this;
	var numberLength = number.length
		for(i=0; i< numberLength; i++){
 		sliced.push(number.substr(number.length - 2));
 		number = number.slice(0,-2);
 		numberLength = numberLength - 1;
 	}
	return sliced
}
String.prototype.removeLastThree = function(){
	return this.slice(0,-3);
};

String.prototype.stringifyValues = function(){
	var digits = ['', 'एक', 'दुई' ,'तीन', 'चार', 'पाँच' , 'छ', 'सात' , 'आठ' , 'नौँ' , 'दश', 'एघार', 'बाह्र ', 'तेह्र', 'चौध', 'पन्ध्र', 'शोह्र', 'सत्र', 'अठार', 'उन्नाइस', 'बीस', 'एक्काइस', 'बाइस', 'तेइस', 'चौबीस', 'पचीस', 'छब्बिस', 'सत्ताइस', 'अठ्ठाइस', 'उन्नतीस', 'तीस', 'एकतीस', 'बत्तीस', 'तेत्तिस', 'चौतीस', 'पैँतीस', 'छत्तिस', 'सैँतीस', 'अठ्तीस', 'उन्नचालीस', 'चालीस', 'एकचालीस', 'बयालीस', 'त्रिचालिस', 'चौवालीस', 'पैँतालीस', 'छयालीस', 'सतचालिस', 'अठचालीस', 'उन्नपचास', 'पचास', 'एकाउन्न', 'बाउन्न', 'त्रिपन्न', 'चौवन्न', 'पचपन्न', 'छपन्न', 'सन्ताउन्न', 'अन्ठाउन्न', 'उन्नसाठी', 'साठी', 'एकसठ्ठी', 'बैसठ्ठी', 'त्रिसठ्ठी', 'चौसठ्ठी', 'पैसठ्ठी', 'छैसठ्ठी', 'सतसठ्ठी', 'अठसठ्ठी', 'उनान्सत्तरी', 'सत्तरी', 'एकहत्तर', 'बहत्तर', 'तिरहत्तर', 'चौरहत्तर', 'पचहत्तर', 'छहत्तर', 'सतहत्तर', 'अठहत्तर', 'उनानसी', 'असी',  'एकासी', 'बयासी', 'त्रियासी', 'चौरासी', 'पचासी', 'छयासी', 'सतासी', 'अठासी', 'उनान्नब्बे', 'नब्बे', 'एकानब्बे', 'बयानब्बे', 'त्रियानब्बे', 'चौरानब्बे', 'पन्चानब्बे', 'छयानब्बे', 'सन्तानब्बे', 'अन्ठानब्बे', 'उनान्सय', 'सय' ];
	return digits[this];

};


String.prototype.stringifyPlace = function(){
	var place = [ '', 'सय','हजार', 'लाख', 'करोड', 'अरब', 'खरब', 'निल', 'पद्म', 'संख्य' ];
	return place[this];
};

Array.prototype.reverseAndJoin = function(){
	 var list = [];
	 this.forEach(function(value, i){
 		if( i == 0){
			list.push(value.stringifyValues());
 		}
 		else if(i == 1 && value == '0'){
 			list.push('');
 		}
 		else{
 			list.push(value.stringifyValues()+" "+ i.toString().stringifyPlace());
 		}
 	});
    return list.reverse().join(" ");
}

