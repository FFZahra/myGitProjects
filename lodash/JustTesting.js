var _  = {
   
    // ----------------------------------------------------
    drop(arr, n=1){
      if (isNaN(n)){
        return '2nd argument should be a number!';
      } else if (n > arr.length){
          return [];
        } else if (n <= 0){
            return arr;
        } else {
            let newArr = arr.slice(n);
            return newArr;
        };  
    },
    // ----------------------------------------------------
    dropWhile(obj, key){
        
    },
    // ----------------------------------------------------
    chunk(obj, key){
  
    }
    // ----------------------------------------------------
  
  }; // end of _ object-------------
  var std = {
      age: 45,
      id: 'AB101',
      isChkd: true,
      'New bagNo': 145,
      address: undefined    
      };
      
  var staff = {
      age: 45,
      id: 'AB101',
      isChkd: true
  }; 
  


  let t = [1, 9, 7.5, 2, 11, 3, 5, 8];
  let p = 'ScrabbleIsAGame'
  console.log(_.drop(t, 3));
 
 //  console.log(_.drop(staff, 1));
  
 
  
  








  
  
  // ----------------------------------------------------
  // Do not write or modify code below this line.
  module.exports = _;