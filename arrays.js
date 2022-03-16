// built-in functions

// Function	Runtime	Description
// array.push	O(1)	Insert element to the end of the array
// array.pop	O(1)	Remove element to the end of the array
// array.shift	O(n)	Remove element to the beginning of the array
// array.unshift	O(n)	Insert element(s) to the beginning of the array
// array.slice	O(n)	Returns a copy of the array from beginning to end.
// array.splice	O(n)	Changes (add/remove) the array

const array = [1, 2, 3];

function insertToTail(array, element) {
    array.push(element);
    return array;
}

console.log(insertToTail(array, 4)); // => [ 1, 2, 3, 4 ]

function insertToHead(array, element) {
    array.unshift(element);
    return array
}

console.log(insertToHead(array, 0)); // => [ 0, 1, 2, 3 ]

const array1 = [1, 'word', 3.14, { a: 1 }];
function access(array, index) {
    return array[index];
}

console.log(access(array1, 0)); // => 1
console.log(access(array1, 3)); // => {a: 1}

function search(array, element) {
    for(i = 0; i < array.length; i++){
        if(array[i] ===  element){
            return i
        }
    }
}

const array2 = [1, 'word', 3.14, { a: 1 }];
console.log(search(array2, 'word')); // => 1
console.log(search(array2, 3.14)); // => 2


function remove(array, element) {
    const index = search(array, element)
    array.splice(index, element)
    return array
}

const array3 = [0, 1, 2, 3];
console.log(remove(array3, 1)); // => [ 0, 2, 3 ]
