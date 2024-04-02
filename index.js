// // 1. Write a JavaScript function to get the first element of an array. Passing a parameter 'n' will return the first 'n' elements of the array.
// // (Array method-lardan istifadə edin)
// // Example:
// // console.log(getFirst([1, 73, 99, 20])) -> 1
// // console.log(getFirst([1, 73, 99, 20], 2)) -> [1, 73]
// // console.log(getFirst([1, 73, 99, 20], 0)) -> []
// // console.log(getFirst([1, 73, 99, 20], 4)) -> [1, 73, 99, 20]

// let getFirst = [1, 73, 99, 20];
// console.log(getFirst.at(0));
// console.log(getFirst.slice(0,2));
// // console.log(getFirst([1, 73, 99, 20], 0));
// console.log(getFirst.slice(0));

// // 2. Write a simple JavaScript function to join all elements of the following array into a string.
// // console.log(join([1, 73, 99, 20], "*")) -> 1*73*99*20
// // console.log(join([1, 73, 99, 20], "/")) -> 1/73/99/20

// console.log(([1, 73, 99, 20].join("*")))
// console.log(([1, 73, 99, 20].join("/")))

// // 3. Write a JavaScript program(function) that accepts a string as input and swaps the case of each character. For example, if you input 'The Quick Brown Fox' the output should be 'tHE qUICK bROWN fOX'
// // Example:
// // console.log(convert('saLamNecesen)) -> SAlAMnECESEN

// let word = "saLamNecesen"
// let empty = ""
// function proqram(params) {
//     for (let i = 0; i < word.length; i++) {
//        if(word[i]===word[i].toUpperCase()){
//         empty+=word[i].toLowerCase()
//        }else{
//         empty+=word[i].toUpperCase()
//        }
//     }
//     return empty
// }
// proqram()
// console.log(empty);

// 4. Write a method that clears the array from all unnecessary elements, like false, undefined, empty strings, zero, null.
// console.log(clear([0, 1, false, 2, undefined, '', 3, null]); -> [1, 2, 3]

//  function number(array) {
//     let emptyNumber = []
//  for (let i = 0; i < array.length; i++) {
//     if(  array[i]!==false && array[i]!==undefined && array[i]!==null && array[i]!=='' && array[i]!==true){
//         emptyNumber.push(array[i])
//         }
//  }
//  return emptyNumber
//  }
// console.log(number([0, 1, false, 2, undefined, '', 3, null]));

// 5. Write a method that returns a duplicate-free array.
// console.log(clearDuplicate([1, 2, 1, 2, 3])); -> [1, 2, 3]
// console.log(clearDuplicate(['a', 2, 'd', 2, 'a', 14, 14, 's', false])); -> ['a', 2, 'd', 14, 's', false]

// function clearDuplicate(array) {
//     let duplicate = [];
//     for (let i = 0; i < array.length; i++) {
//         if(duplicate.indexOf(array[i]) === -1){
//             duplicate.push(array[i])
//         }

//     }
//     return duplicate
// }
// console.log(clearDuplicate([1, 2, 1, 2, 3]))

// 6. Write a function that compares two arrays and returns true if they are identical.
// console.log(isEqual([1, 2, 3, 4], [1, 2, 3, 4])) -> true
// console.log(isEqual([1, 2, 3, 4], [1, 2, 3, 4, 5])) -> false
// console.log(isEqual([1, 2, 3, 4], [1, 2, 3, 4, false])) -> false
// console.log(isEqual([1, 2, 3, 4, false], [1, 2, 3, 4, false])) -> true

// function isEqual(arr1,arr2) {
//     if(arr1.length !== arr2.length){
//         return false
//     }

//     for (let i = 0; i < arr1.length; i++) {
//         if(arr1[i]!==arr2[i]){
//             return true
//         }

//     }
//     return true
// } console.log(isEqual([1, 2, 3, 4], [1, 2, 3, 4]))
// console.log(isEqual([1, 2, 3, 4], [1, 2, 3, 4, 5]))
// console.log(isEqual([1, 2, 3, 4], [1, 2, 3, 4, false]))
// console.log(isEqual([1, 2, 3, 4, false], [1, 2, 3, 4, false]))

// 7. Bir string ve bir char qebul eden bir function yazın.Əgər daxil olunmuş char string-də varsa char-ın
//  yerləşdiyi indekslərin cəmini yoxdursa -1 return etsin. Məsələn salam və 'a' daxil olunarsa output 1+3=4 olmalıdır.

// function getDetails(string, char) {
//   let sum = 0;
//   let boolean = false;

//   for (let i = 0; i < string.length; i++) {
//     if (string[i] === char) {
//       sum += i;
//       boolean = true;
//     }
//   }
//   if (boolean) {
//     console.log(sum);
//   } else {
//     console.log(-1);
//   }
//   return boolean;
// }

// console.log(getDetails("salam", "a"));



// 8. Bir function yazın parametr olaraq bir array, bir index və bir string qəbul edir. Və daxil olunmuş indeksə əsasən 
// göndərilmiş string-i həmin array-ə əlavə edib return etsin. Məsələn arqument olaraq - ['a','salam','b','world'], 3, "dev"
//  göndərilərsə o zaman dev string-ini 3cu indekse elave etmelidir, eger gonderilmish indeks array-in uzunlugundan boyuk olarsa
//   o zaman hemin string array-in en sonuna elave edilsin.


// function all(array,index,string) {
//     array.splice(index,0,string);
//     return array
// }
// let array =  ['a','salam','b','world'];;
// let index = 3;
// let string = "dev"
// console.log(all(array,index,string));


// 9. Bir function yazın, parametr olaraq 2 array qebul edir və bir char qebul edir.gonderilmish char-a esasen hemin iki array-i ve elementlerini birleshdirib 
// bir string olaraq return etmelidir. Meselen -> [1,2] [3,4] '*' gonderilerse output -> 1*2*3*4 string-i olmalidir.

// function allArray(arr1,arr2,char) {
//    let conc =  arr1.concat(arr2)
//    let concJoin = conc.join("*")
//    console.log(concJoin);
// }

// allArray([1,2] ,[3,4] ,'*')



// 10. Students object-lerinden ibaret bir array-iniz  olsun. student object-inde (name,surname,age,point) deyerleri var.
// Hemin array-i telebelerin yashina gore azalan sira ile sort edin.
// Hemin array-i telebelerin point deyerine esasen sort edin.

// let students = [
//     { name: "Laman", surname: "Mustafazada", age: 20, point: 80 },
//     { name: "NARMIN", surname: "qedimli", age: 22, point: 85 },
//     { name: "yasar", surname: "quliyev", age: 18, point: 90 }
// ];


// students.sort((student1, student2) => student2.age - student1.age);
// students.sort((student1, student2) => student2.point - student1.point);






// // Hemin array-i parametr olaraq qebul eden  bir funtion yazin. Point-i en ashagi olan ve en yuxari olan teleblerin name-lerini bir array-e yigib return edin.
//  (Math class-indan istifade edin

// let students = [
//     { name: "Laman", surname: "Mustafazada", age: 20, point: 80 },
//     { name: "NARMIN", surname: "qedimli", age: 22, point: 85 },
//     { name: "yasar", surname: "quliyev", age: 18, point: 90 }
// ];

// function studentName(students) {

//     let minValue = Infinity;
//     let maxValue = -Infinity;
//     let minNames = [];
//     let maxNames = [];

//     for (let i = 0; i < students.length; i++) {
//         let student = students[i];
        
//         if (student.point < minValue) {
//             minValue = student.point;
//             minNames = [student.name];
//         } else if (student.point === minValue) {
//             minNames.push(student.name);
//         }

//         if (student.point > maxValue) {
//             maxValue = student.point;
//             maxNames = [student.name];
//         } else if (student.point === maxValue) {
//             maxNames.push(student.name);
//         }
//     }

//     return [...minNames, ...maxNames];
// }

// studentName(students)