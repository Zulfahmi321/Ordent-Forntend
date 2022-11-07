// Zul Fahmi Alfin
// Test Frontend 

const arr1 = [
    ['J', 'L', 'L', 'M'],
    ['u', 'i', 'i', 'a'],
    ['s', 'v', 'f', 'n'],
    ['t', 'e', 'e', '']
]

let str1 = []

for (let i = 0; i < arr1.length; i++) {
    for (let j = 0; j < arr1.length; j++) {
        str1.push(arr1[j][i])
        if (j == (arr1.length - 1)) {
            str1.push(' ')
        }
    }
}

console.log(str1.toString().replace(/,/g, ''))

const arr2 = [
    ['T', 'M', 'i', 't', 'p', 'o', 't', 'c'],
    ['h', 'i', 's', 'h', 'o', 'f', 'h', 'e'],
    ['e', 't', '', 'e', 'w', '', 'e', 'l'],
    ['', 'o', '', '', 'e', '', '', 'l'],
    ['', 'c', '', '', 'r', '', '', ''],
    ['', 'h', '', '', 'h', '', '', ''],
    ['', 'o', '', '', 'o', '', '', ''],
    ['', 'n', '', '', 'u', '', '', ''],
    ['', 'd', '', '', 's', '', '', ''],
    ['', 'r', '', '', 'e', '', '', ''],
    ['', 'i', '', '', '', '', '', ''],
    ['', 'a', '', '', '', '', '', '']
]

let str2 = []

for (let i = 0; i < arr2.length; i++) {
    for (let j = 0; j < arr2.length; j++) {
        str2.push(arr2[j][i])
        if (j == (arr2.length - 1)) {
            str2.push(' ')
        }
    }
}

console.log(str2.toString().replace(/,/g, ''))