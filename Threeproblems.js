/**
 * Created by MGY on 9/21/2015.
 */
//http://philipmjohnson.github.io/ics314f15/morea/coding/experience-three-problems.html
// solves the first three problem in

// problem1
var listnums = [1,2,3,4];
function sumFor(nums){
    var total = 0;
    for(var i = 0; i < nums.length; i++) total += nums[i];
    return total;
};

function sumWhile(nums){
    var total = 0;
    var i = 0;
    while(i<nums.length){
        total += nums[i];
        i++;
    }
    return total;
};

//console.log(sumWhile(listnums));

//console.log( sumFor(listnums));

function sumRecursion(nums){
    if(nums.length === 0){
        return 0;
    }
    else{
        return nums[0] + sumRecursion(nums.slice(1,nums.length)) ;
    }
};
function addAll(memo, nums){
  return memo + nums;
};

function sumTheSimpleWay(nums){
    return _.reduce(nums,addAll, 0 );
};
//console.log(sumRecursion(listnums))
//console.log(sumTheSimpleWay(listnums));

// problem 2
// cretaing zipList function
// 1 takes two lists of equal length
// 2 take elements and alternate elements
var test1 = [1,2,3];
var test2 = ['a','b','c'];
function zipList(list1, list2){
  var result = [];
    for(var i = 0; i < list1.length; i++){
        result.push(list1[i], list2[i]);
    }
  return result;
};
console.log(zipList(test1,test2));
// zipListTheSimpleWay
function zipListTheSimpleWay(list1, list2){
    return _.flatten(_.zip(list1,list2));
}
console.log(zipListTheSimpleWay(test1,test2));

//prolem 3 Fibonnacici
function Fib(num){
    var head = 1;
    var tail = 0;
    var fib = [tail];
    for(var i = 0; i < 99; i++){
        var tempHead = head;
        head += tail; // update tail
        tail = tempHead;
        fib.push(head);
    }
    return fib;
}

console.log(Fib(10));