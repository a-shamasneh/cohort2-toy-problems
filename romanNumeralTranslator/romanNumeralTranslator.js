
/**
 * Given a roman numeral as input, write a function that converts the roman
 * numeral to a number and outputs it.
 *
 * Example:
 * translateRomanNumeral("XXI") // 21
 *
 * When a smaller numeral appears before a larger one, it becomes
 * a subtractive operation. You can assume only one smaller numeral
 * may appear in front of larger one.
 *
 * Example:
 * translateRomanNumeral("IV") // 4
 *
 * You should return `null` on invalid input.
 */

var translateRomanNumeral = function(romanNumeral){
	var DIGIT_VALUES = {
	  I: 1,
	  V: 5,
	  X: 10,
	  L: 50,
	  C: 100,
	  D: 500,
	  M: 1000
	};
<<<<<<< HEAD

	romanNumeral=romanNumeral.toUpperCase();
	var roman =romanNumeral.split("");
	 console.log(roman);
	 var result=0;
	if(roman.length>1){
	for (var i=0;i<roman.length;i++){
		if(roman[i] in DIGIT_VALUES){/// check if the input valid roman number 
			if(DIGIT_VALUES[roman[i]]<DIGIT_VALUES[roman[i+1]]){
				result += DIGIT_VALUES[roman[i+1]]-DIGIT_VALUES[roman[i]];
				i++; ///  to skip next elem
			}
			else{
				result+=DIGIT_VALUES[roman[i]]
			}
		}
		else{
			return "invalid input!!!";
		}
		}
		return result;

	}//// if one number 
	else{
		if(roman[0] in DIGIT_VALUES){
			result=DIGIT_VALUES[roman[0]];
			return result;
		}
		return "not valid input" ;
	}
	
}

=======
}
>>>>>>> ec1197ded368e7aad2cc2c29d5059a3905f42645
