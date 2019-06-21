//1. Fibonacci

function fib(a) {
    let array = [0,1];
    for (let i = 1; i < a; i++) {
    array.push(array[i] + array[i-1]);}
	return array[a];
}

//2. bubbleSort
function bubbleSort(numArray) {
 	let good = false;   

	do 
	{
		good = true;
		for (let i = 0; i < numArray.length - 1; i++) 
		{
			if(numArray[i] > numArray[i+1])
			{
				let a = numArray[i];
				let b = numArray[i+1];
				numArray[i] = b;
				numArray[i+1] = a;
				good = false;
            }
        }
    } while (!good)
	return numArray;
}

//3. Reverse String
function reverseStr(someStr){
    let retStr = "";
    for (let i = someStr.length - 1; i >= 0; i--){
        retStr = retStr + someStr[i];
      }
    return retStr;
    }

//4. Factorial
function factorial(someNum){
    if (someNum > 1)
        return someNum * factorial(someNum -1);
    else return someNum;
}

//5. SubString
function subString(someStr, length, offset) {
    if (offset + length < someStr.length)
    {
        let retString = "";
        for (let i = offset; i < offset + length; i++)
        {
            retString += someStr[i];
        }
        return retString;
    }
    
    if (offset + length >= someStr.length)
        alert('Requested substring outside string boundaries');
    else if (offset < 0)
        alert('Offset must be a postive value');
    else if (offset > someStr.length - 1)
        alert('Offset is outside string boundaries');
    else if (length < 1)
        alert('given length is 0 or negative, only positive integers allowed');
    
    return undefined;
}

// 6. Even Number
function isEven(someNum)
{
    let numString = someNum/2 + "";
    return !numString.includes('.');
}

// 7. Palindrome
function palindrome(someStr) {
    for (let i = 0; i < someStr.length; i++)
    {
        if (someStr[i] !== someStr[someStr.length - 1 - i])
            return false;
    }
    return true;
}

// 8. Shapes
function printShape(shape, height, character) {
    shapeStr = "";
    let i = 0;
    let j = 0;
    
    switch(shape) {
        case 'Square':
            for (i = 0; i < height; i++) {
                for (j = 0; j < height; j++) {
                    shapeStr += character;
                }
                shapeStr += '\n';
            }
            break;
        case 'Triangle':
            for (i = 0; i < height; i++) {
                for (j = 0; j < i+1; j++) {
                    shapeStr += character;
                }
                shapeStr += '\n';
            }
        break;
        case 'Diamond':
            spaces = height - 1;
            goingIn = true;

            for (i = 0; i < height; i++) {
                // Setup
                leftSpaces = spaces / 2;
                chars = height - spaces;
                
                // Action
                for (j = 0; j < height; j++) {
                    if (chars === 0)
                        shapeStr += ' ';
                    else if (leftSpaces === 0)
                    {
                        shapeStr += character;
                        chars--;
                    }
                    else {
                        shapeStr += ' ';
                        leftSpaces--;
                    }
                }
                
                shapeStr += '\n';
                
                // Cleanup
                if (goingIn)
                    spaces -= 2;
                else
                    spaces += 2;
                if (goingIn && spaces === 0)
                    goingIn = false;

            }
            break;
        default:
            console.log(`Cannot draw this shape, sorry.`)
            break;
    }

    console.log(shapeStr);
}

// 9. Object literal
function traverseObject(someObj) {
    let keys = Object.keys(someObj);

    let retString = "";

    for(let i = 0; i < keys.length; i++)
    {
        retString += `${keys[i]}: ${someObj[keys[i]]}\n`
    }

    console.log(retString);
}

// 10. Delete Element
function deleteElement(someArr){
    let retVal = `Length of array: ${someArr.length}\n`;
    retVal += `Deleting element 3\n`;
    delete someArr[3];
    retVal += `Length of array: ${someArr.length}\n`;

    console.log(retVal);
}

// 11. Splice Element
function spliceElement(someArr){
    retVal = `Length of array: ${someArr.length}\n`;
    retVal += `Splicing element 3\n`;
    someArr.splice(3,1);
    retVal += `Length of array: ${someArr.length}\n`;

    console.log(retVal);
}

// 12. Defining an object using a constructor
function Person(name, age) {
    this.name = name;
    this.age = age;
}

// 13. Defining an object using an object literal
function getPerson(name, age){
    return {name: name, age: age};
}