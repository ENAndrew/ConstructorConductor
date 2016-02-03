//Just like you can add methods to your own constructor, you can also add methods and properties to built in 
//classes in JavaScript like Arrays and Objects.

//Add a reverse method to the String 'class' so that every instance of String can call reverse and reverse itself.
  
  //code here
  
  String.prototype.reverse = function(){
      var reverseStr = [];
      for(var i = this.length - 1; i >= 0; i--) {
          reverseStr.push(this[i]);
      }
      return reverseStr.join('');
  };
  
  'Hi my name is Erica'.reverse();