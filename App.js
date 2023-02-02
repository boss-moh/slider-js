
const prev = document.querySelector('#prev')
const next = document.querySelector('#next')


prev.addEventListener('click', () => {
    let center = document.querySelector('.item.center');
    let left = Array.from(document.querySelectorAll('.item.left')).pop();
    if (left) {
        left.classList.remove('left')
        left.classList.add('center')
        center.classList.remove('center')
        center.classList.add('right')
    }
})

next.addEventListener('click', () => {
    let center = document.querySelector('.item.center');
    let right = document.querySelector('.item.right');
    if (right) {
        right.classList.remove('right')
        right.classList.add('center')
        center.classList.remove('center')
        center.classList.add('left')
    }
})


// function oldMul(a, b) {
//     a = a.replace(/(\d{1})/g, '$1,').split(',');
//     a.pop();
//     b = b.replace(/(\d{1})/g, '$1,').split(',');
//     b.pop();
//     // console.log(a, b)
//     let result = [];
//     for (let i in a)
//         for (let j in b) {
//             if (!Array.isArray(result[i]))
//                 result[i] = []
//             result[i][j] = a[i] * b[j]
//         }
//     // result.reverse();

//     let repeat = 0;
//     let activeResult = 0;
//     console.log(result)

//     while (result.length) {
//         activeResult += +(result.pop().join('') + '0'.repeat(repeat));
//         repeat++;
//     }
//     return activeResult
// }



// function mul(a, b) {
//     a = a.replace(/(\d{1})/g, '$1,').split(',');
//     a.pop();
//     b = b.replace(/(\d{1})/g, '$1,').split(',');
//     b.pop();
//     // console.log(a, b)
//     let result = [];
//     for (let i = a.length - 1; i >= 0; i--) {
//         let current = 0;
//         for (let j = b.length - 1; j >= 0; j--) {
//             if (!Array.isArray(result[i]))
//                 result[i] = []
//             let value = a[i] * b[j] + current;
//             if (value > 9) {
//                 current = +(value / 10).toFixed()
//                 result[i][j] = value % 10;
//             } else {
//                 result[i][j] = +value;
//                 current = 0;
//             }
//         }
//     }


//     let repeat = 0;
//     let activeResult = 0;

//     while (result.length) {
//         activeResult += +(result.pop().join('') + '0'.repeat(repeat));
//         repeat++;
//     }
//     return activeResult + ''
// }

// function numOfDiv(num) {
//     let count = 0;
//     for (let i = 1; i <= Math.ceil(num / 2); i++) {
//         if (num % i == 0) {
//             count++
//         }
//     }
//     return num == 1 ? 1 : count + 1
// }

// function countPairsInt(diff, nMax) {
//     // Your code
//     let total = 0;
//     for (let i = 1; i < nMax - diff; i++) {
//         if (numOfDiv(i) === numOfDiv(i + diff)) {
//             total++;
//         }
//     }
//     return total
// }

// function Ahmed(word) {
//     word = word.toUpperCase();
//     let hash = {};
//     let result = '';
//     for (let i of word) {
//         if (hash[i] === undefined) {
//             hash[i] = 1;
//         } else {
//             hash[i]++;
//         }
//     }
//     for (let i of word) {
//         if (hash[i] === 1) {
//             result += '(';
//         } else {
//             result += ')'
//         }
//     }
//     return result
// }


// function toUnder(word) {
//     let result = '';
//     return word.replace(/(.)([A-Z])/g, '$1_$2')
// }

// function oldMul(a, b) {
//     a = a.split('')
//     b = b.split('')
//     // console.log(a, b)
//     let result = [];
//     for (let i in a)
//         for (let j in b) {
//             if (!Array.isArray(result[i]))
//                 result[i] = []
//             result[i][j] = a[i] * b[j]
//         }
//     // result.reverse();

//     console.log(result)
//     let repeat = 0;
//     let activeResult = 0;
//     let current = 0;
//     let value = 0;
//     // while (result.length) {
//     //     value =
//     //     activeResult += +(result.pop().join('') + '0'.repeat(repeat));
//     //     repeat++;
//     // }
//     return activeResult
// }





// // function mul(a, b) {
// //     a = a.split('')
// //     b = b.split('')
// //     let result = [];
// //     let current = 0;
// //     for (let i = a.length - 1; i >= 0; i--) {
// //         for (let j = b.length - 1; j >= 0; j--) {
// //             if (!Array.isArray(result[i])) result[i] = []
// //             let value = a[i] * b[j] + current;
// //             if (+value > 9) {
// //                 current = +(value / 10).toFixed()
// //                 result[i][j] = value % 10;
// //             } else {
// //                 result[i][j] = +value;
// //                 current = 0;
// //             }
// //         }
// //         if (current) {
// //             result[i].unshift(current);
// //         }
// //     }

// //     console.log(result)
// //     let repeat = 0;
// //     let activeResult = 0;

// //     // while (result.length) {
// //     //     activeResult += +(result.pop().join('') + '0'.repeat(repeat));
// //     //     repeat++;
// //     // }
// //     return activeResult + ''
// // }




// // ssss = $0

// //     var event = new MouseEvent('click', {
// //     'view': window,
// //     'bubbles': true,
// //     'cancelable': true
// //   });
// // ssss.dispatchEvent(event);


// console.log('======')
// function moveZeros(arr) {
//     let x = 0;
//     let result = []
//     for (let i of arr) {
//         if (i === 0) {
//             x++
//         } else {
//             result.push(i)
//         }
//     }
//     for (let i = 0; i < x; i++)
//         result.push(0)
//     return result
// }

// function removeZeros(array) {
//     // Sort "array" so that all elements with the value of zero are moved to the
//     // end of the array, while the other elements maintain order.
//     // [0, 1, 2, 0, 3] --> [1, 2, 3, 0, 0]
//     // Zero elements also maintain order in which they occurred.
//     // [0, "0", 1, 2, 3] --> [1, 2, 3, 0, "0"]

//     // Do not use any temporary arrays or objects. Additionally, you're not able
//     // to use any Array or Object prototype methods such as .shift(), .push(), etc

//     // the correctly sorted array should be returned.
//     let hash = [];
//     let key = 0
//     let result = []
//     for (let i of array) {
//         if (i === 0 || i === '0') {
//             hash[hash.length] = i
//         } else {
//             result[result.length] = i
//         }
//     }
//     for (let i = 0; i < hash.length; i++)
//         result[result.length] = hash[i]
//     return result
//     return array;
// }






// function oldMul(a, b) {
//     a = a.replace(/(\d{1})/g, '$1,').split(',');
//     a.pop();
//     b = b.replace(/(\d{1})/g, '$1,').split(',');
//     b.pop();
//     // console.log(a, b)
//     let result = [];
//     for (let i in a)
//         for (let j in b) {
//             if (!Array.isArray(result[i]))
//                 result[i] = []
//             result[i][j] = a[i] * b[j]
//         }
//     // result.reverse();

//     let repeat = 0;
//     let activeResult = 0;
//     console.log(result)

//     while (result.length) {
//         activeResult += +(result.pop().join('') + '0'.repeat(repeat));
//         repeat++;
//     }
//     return activeResult
// }



// function mul(a, b) {
//     a = a.split('')
//     b = b.split('')
//     let result = [];
//     let count = 0;
//     while (b.length) {
//         let value = b.pop();
//         result.push([...a.map(i => i * value), ...'0'.repeat(count)])
//         count++;
//     }
//     return result
//     console.log(a, b)


// }

// function mul(a, b) {
//     a = a.split('')
//     b = b.split('')
//     let result = [];
//     let temp = [];
//     let count = 0;
//     debugger

//     while (b.length) {
//         let x = b.pop();
//         for (let y in a) {
//             let value = x * a[y];
//             if (value > 9) {
//                 add(Math.floor(value / 10))
//                 temp.push(value % 10)
//             } else {
//                 temp.push(value)
//             }
//         }
//         result.push(temp.concat(...'0'.repeat(count)));
//         temp = [];
//         count++;
//     }

//     let value = '';
//     let current = 0;
//     temp = 0;
//     let j = result[result.length - 1].length;
//     do {
//         for (let i of result) {
//             temp += +i.pop() || 0;
//         }
//         temp += current;
//         if (temp >= 10) {
//             current = Math.floor(temp / 10);
//             temp = temp % 10;
//         } else {
//             current = 0
//         }
//         value = temp + value;
//         temp = 0;
//         j--
//     } while (j > 0)
//     return value

//     function add(current) {
//         for (let i = temp.length - 1; i >= 0; i--) {
//             temp[i] += current;
//             if (temp[i] + current >= 10) {
//                 current = Math.floor(temp[i] / 10);
//                 temp[i] %= 10;
//             } else {
//                 return
//             }
//         }
//         temp.unshift(current);
//     }

// }

// function isNan(x) {
//     let test = false;
//     if (typeof x === 'number' && !x && x !== 0) {
//         test = true;
//     }
//     return test;
// }

// function add(n = undefined) {
//     // function test(m) {
//     //     return add(n + m)
//     // };
//     // return x => {
//     //     return add(x) || n
//     // }
//     if (n !== undefined) return 0 + add
//     return add;
// }
// console.log(9)

// undefined
// function add(n) {
//     return function f(m = null) {
//         if (m) {
//             return add(m + n)
//         } else {
//             return m + n
//         }
//     }
// }


function add() {
    let f = (m = null) => {
        if (m) {
            x = f;
            return add(m + n) && m + n
        } else {
            // x.x = m + n;
            n = m + n;
            return m + n
        }
    }
    return f
}


function add(n) {
    let f = (m) => {
        n += m
        return f
    }
    f.toString = function () {
        return n
    }
    f.valueOf = function () {
        return n
    }
    return f
}
function add(n) {
    let f = (m = n) => {
        if (!f.m) f.m = 0
        f.toString = function () {
            return f.m + m
        }
        return f
    }

    return f()
}
console.log(add(2))

function add(n) {
    let f = function f(m) {
        n + m
        return f
    }
    f.toString = function () {
        return n
    }
    return f
}
