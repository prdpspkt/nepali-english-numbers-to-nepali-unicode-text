# English Numbers to Nepali Unicode (Digit and Text) Converter 
This is a simple tool written in javascript that converts English Digit (Hindu Arabic Numbers) into  Nepali Unicode Text, Digits(Devanagari).
### Here is the demo.
```
<script type="text/javascript">
window.onload =function(){
	document.getElementById("convert").addEventListener("click", convertIt);
};

function convertIt(){
	var input = document.getElementById("input").value;
	var output = convertToNepaliText(input);
	var output2 = convertToNepaliNumber(input);
	document.getElementById("output").innerHTML = output;
	document.getElementById("output2").innerHTML = output2+"/"+convertToCommaNumber(output2);
}

</script>
<input type="text" id="input" >
<button id="convert">Click Me</button>
<div id="output"></div>
<div id="output2"></div> 
```


### Input and Output

**Input:** 1200
 ``` convertToNepaliText(1200) => एक हजार दुई सय
     convertToNepaliNumber(1200) => १२००
     convertToCommaNumber(1200) => १,२००
 ```
