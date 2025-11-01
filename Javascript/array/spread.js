//expands an iterable into multiple values
function func(...arr) {
    console.log(arr);
}

func(1, 2, 3); // Output: [1, 2, 3]
function str(...chars) {
    console.log(chars);
}

str('my', 'is', 'arjendra'); // Output: ['a', 'b', 'c']