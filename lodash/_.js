var _  = {
    clamp(number, lower, upper) {
      if (lower === Math.max(number, lower)) {
        return lower;
      } else if (upper === Math.min(number, upper)) {
        return upper;
      } else if (number === lower || number === upper) {
        return number;
      } else {
        return number;
      };
    },
    // ----------------------------------------------------
    inRange(number, start, end) {
      if (end === undefined) {
        [start, end] = [0, start];
      } else if (start > end) {
        [start, end] = [end, start];
      };
  
      if (number < start) {
        return false;
      } else if (number > end || number === end) {
        return false;
      } else if (number === start) {
        return true;
      } else {
        return true;
      };
  
    },
  // ----------------------------------------------------
    words(strg){
      return strg.split(' ');
    },
  // ----------------------------------------------------
    pad(strg, len) {
      const diff = len - strg.length;
      if (diff <= 0) {
        return strg;
      };
  
      const md = diff % 2;
      const intgr = Math.trunc(diff / 2);
      if (md === 1) {
        let rtpad = ' '.repeat(intgr + 1);
        let lfpad = ' '.repeat(intgr);
        return lfpad + strg + rtpad;
      } else if (md === 0) {
        let lfpad = rtpad = ' '.repeat(intgr);      
        return lfpad + strg + rtpad;
      };  
    },
    // ----------------------------------------------------
    has(obj, key){
      if (obj[key] === undefined) {
        return false;
      } else {
        return true;
      };
    },
    // ----------------------------------------------------
    invert(obj){
      for (let i in obj) {
      let y = obj[i];
      obj[y] = i;
      delete obj[i];
      };
      return obj;
    },
    // ----------------------------------------------------
    findKey(obj, func){
      for (let ky in obj){
        if (func(obj[ky])){
          return ky;
        };
        return undefined;
      };
    },
    // ----------------------------------------------------
    drop(arr, n=1){
      if (isNaN(n)){
        return 'Error: 2nd argument should be a number!';
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
    dropWhile(arr, func){
      // let arrCop = [...arr];
      // let dropNum = arrCop.findIndex((itm, ndx) => !func(val, ndx, arrCop));
      // let drpdArr = this.drop(dropNum);
      // return drpArr;
    let arrCop = [...arr];
    let ndx = arrCop.findIndex(elem => !func(elem));
    if (ndx === -1){
      return arr;
    }
    let finArr = this.drop(arrCop, ndx);
    return finArr;
    },
    // ----------------------------------------------------
    chunk(arr, n=1){
      if (isNaN(n)){
        return 'Error: 2nd argument should be a number!';
      } else if (n > arr.length){
          return arr;
        } else if (n <= 0){
            return [];
        } else {
          let fullGrpsno = Math.trunc(arr.length / n);
          let rem = arr.length % n;
          let arrCop = [...arr];
          let grps = [];
          let temp = [];
          for (let i = 1; i <= fullGrpsno; i++){
            grps.push(arrCop.slice(0, n));
            temp = this.drop(arrCop, n);
            arrCop = temp;
          };
          if (rem !== 0){
            grps.push(arrCop);
          };
          return grps;
        };  
    }
    // ----------------------------------------------------
  
  }; // end of _ object
  // Tests:
  console.log(_.clamp(2, 5, 10));
  console.log(_.clamp(12, 5, 10));
  console.log(_.clamp(2, -5, 5));
  console.log(_.clamp(5, 5, 10));
  console.log(_.clamp(10, 5, 10)); 
  // ----------------------------------------------------
  console.log(_.inRange(2, 5, 10));
  console.log(_.inRange(12, 5, 10));
  console.log(_.inRange(2, -5, 5));
  console.log(_.inRange(5, 5, 10));
  console.log(_.inRange(10, 5, 10));
  // ----------------------------------------------------
  console.log(_.words('What is the time now, please?')); 
  // ----------------------------------------------------
  console.log(`[${_.pad('Hello', 8)}]`);
  console.log(`[${_.pad('Hello', 9)}]`);
  console.log(`[${_.pad('Hello', 4)}]`);
  console.log(`[${_.pad('Hello', 5)}]`);
  console.log(`[${_.pad('Hello', 6)}]`);
  console.log(`[${_.pad('I am me', 17)}]`);
  console.log(`[${_.pad('I am me', 22)}]`); 
  // ----------------------------------------------------
  var std = {
      age: 45,
      id: 'AB101',
      isChkd: true,
      'New bagNo': 145,
      address: undefined    
      }
  console.log(_.has(std, 'address'));
  console.log(_.has(std, 'age')); 
  console.log(_.has(std, 'New bagNo')); 
  // ----------------------------------------------------
  var staff = {
      age: 45,
      id: 'AB101',
      isChkd: true
  }; 
  console.log(_.invert(staff)); 
  // ----------------------------------------------------
  console.log(_.findKey(staff, isNaN));
  console.log(_.findKey(staff, isFinite));  
  // ----------------------------------------------------
  let t = ['a', 'b', 'm', 'D', 9, true, 7.5, 'g', 8];
  let p = 'ScrabbleIsAGame'
  console.log(_.drop(t, 3));
  console.log(_.drop(t));
  console.log(_.drop(t, 1));
  console.log(_.drop(p, 8));
  console.log(_.drop('Ouch!'));  
  // ----------------------------------------------------
  console.log(_.dropWhile(t, isNaN));
  console.log(_.dropWhile(p, isNaN));  // I don't get the specs of this.
  // ----------------------------------------------------
  console.log(_.chunk(t, 3));
  console.log(_.chunk(t, 5));
  console.log(_.chunk(t, 4));
  console.log(_.chunk(t, 1));
  console.log(_.chunk(t));
  console.log(_.chunk(t, 0));
  console.log(_.chunk(t, 11));
  console.log(_.chunk(t, 'hi'));
  console.log(_.chunk(p, 5));
  console.log(_.chunk(p, 8));
  // ----------------------------------------------------
  
  
  // Do not write or modify code below this line.
  module.exports = _;