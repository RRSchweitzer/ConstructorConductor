//Just like you can add methods to your own constructor, you can also add methods and properties to built in classes in JavaScript like Arrays and Objects.

//Add a reverse method to the String 'class' so that every instance of String can call reverse and reverse itself.
  
String.prototype.reverse = function() {
	var reverse = this.split(' ').reverse.join(' ');
	return reverse;
}

var String = function(color) {
	this.color = color;
}
var firstStr = new String("red");

firstStr.reverse();