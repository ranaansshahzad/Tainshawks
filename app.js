// Sort

// let wow = [18,14,2,3,9,4,8,5,7,6,1,32,8,77,48,37,48,23,74,74,37,43,84,74,24,73,28,4,70,19,
//     7,4,3,8,2,74,89,32,74,87,34,83,74,8,37,48,73,89,47,38,94,73,47,36,54,10]

// wow.sort(function (a,b){return a-b});
// console.log(wow.length);
// console.log(wow);

// find

// let arr = [18,14,2,3,9,4,8,5,7,6,1,32,8,77,48,37,48,23,74,74,37,43,84,74,24,73,28,4,70,19,
//     7,4,3,8,2,74,89,32,74,87,34,83,74,8,37,48,73,89,47,38,94,73,47,36,54,10]

// function findElement(number){
//     let count = 0
//     arr.map(function (data,index){
//         if (data == number) { 
//             console.log("index" + index + " : " + number);
//             count++;
//         }
//     });
//     console.log("Number of repeated element of Array is =" + count )
// }
// findElement(42)




const arry = [3,4,5,6,7,7,31231,1312,3123,123,123123,12,312,3,123,12,312,312,3,12,312,3,123,12,3,12,312,3,12,312,3,12,312,3,12312,31,4,23,5345,64,57,568,76,896,77,677,8,90,457,124,890,1234,879,1432,6789,123,70,234,67,23,45,7809,13,456,789,875,32,6809876,43876,45678,3487654,67890987,3455,12,22223,454,565,6,6,56,56,78,909876567876543,4567,654,34567,898,7654,56789,87,654,56,7890,987654,45678,90,9,8765,6,7890,987,654];
    function findnumber(number){
      let count =0
      arry.map(function(data,index){
        if (data == number){
          console.log("index" + index +  ":"+number);
          count++;
        }
      });
      console.log("repeated number of arry is =" + count);
    }
    findnumber(7);  

//slice
let newArray = (arr.slice(25, -25));
let sum = 0;
newArray.map(function (data){
  sum = sum + data;
})
console.log ("Total sum of Array="+ sum );