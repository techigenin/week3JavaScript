window.onload = function() {
    getUSA();
    getPeopleInSales();
    getAnchorChildren();
    getHobbies();
    getCustomAttributes();

    document.getElementById('num1').addEventListener("input", sumNum1Num2, true); // 6
    document.getElementById('num2').addEventListener("input", sumNum1Num2, true); // 6
    document.getElementsByName('skills').forEach(function(i){i.addEventListener('change', skillsAlert, true)}); // 7
    document.getElementsByName('favoriteColor').forEach(function(i){i.addEventListener('mouseup', saveColor, true)}); // 8
    document.getElementsByName('favoriteColor').forEach(function(i){i.addEventListener('click', alertColor, true)}); // 8

    for (i of document.getElementsByClassName('empName'))
            i.addEventListener('mouseover',function(event) {dis   (this, event);});

    document.getElementById('helloWorld').addEventListener('click', function() {setTimeout( function () { changeColor( document.getElementById( 'helloWorld'))}, 3000)}, true);

    setInterval(updateTime, 100);
}

// Define function getUSA()
// Find the html element that contains "USA".
// Print that element's contents.
function getUSA() {
    let a = document.getElementsByTagName('*');
    let val = 0;
    for (let i = 0; i < a.length; i++)
    {
      if (a[i].dataset.customattr === 'USA'){
        val = i;

        console.log(a[val].innerHTML);
        break;
      }
    }
};

// 2. Sales
// Define function getPeopleInSales()
// Print the names of all the people in the sales department.
function getPeopleInSales() {
    let employees = document.getElementsByClassName('empName');

    retString = "";

    for (let i = 0; i < employees.length; i++)
    {
        parent = employees[i].parentElement;
        if (parent.children[1].innerHTML === 'Sales')
            retString += parent.children[0].innerHTML + '\n';
    }

    console.log(retString);
}

// 3. Click Here
// Define function getAnchorChildren()
// Find all anchor elements with a <span> child.
// Print the contents of <span>
function getAnchorChildren() {
    let anchors = document.getElementsByTagName('a');
    
    let retStr = "";

    for (let i = 0; i < anchors.length; i++)
    {
        let spans = anchors[i].getElementsByTagName('span');
        
        for (let j = 0; j < spans.length; j++)
            retStr += spans[j].innerHTML + '\n';
    }

    console.log(retStr);
    return;
}

// 4. Hobbies
// Define function getHobbies()
// Find the checked option in the 'hobbies' select element.
// Print the value and the contents.
function getHobbies() {
    let hobbies = document.getElementsByName('hobbies');

    let retVal = "";

    for(let i = 0; i < hobbies.length; i++)
    {
        let curr = hobbies[i];
        let selOpt = curr.options[curr.selectedIndex];
        retVal += `Content: ${selOpt.text}\nValue: ${selOpt.value}\n`;
    }

    console.log(retVal);

}

// 5. Custom Attribute
// Define function getCustomAttribute()
// Find all elements with "data-customAttr" attribute
// Print the value of the attribute.
// Print the element that has the attribute.
function getCustomAttributes() {
    let allTheStuff = document.getElementsByTagName('*');
    let val = 0;
    let retStr = "";
    
    for (let i = 0; i < allTheStuff.length; i++)
    {
        if (allTheStuff[i].dataset.customattr)
        {
             retStr += 'value: ' + allTheStuff[i].dataset.customattr.valueOf() + '\n';
             retStr += `${allTheStuff[i].tagName} tag containing ${allTheStuff[i].innerHTML}\n`;
        }
    }

    console.log(retStr);
}

// 6. Sum Event
// NOTE: Write unobtrusive Javascript
// Regarding these elements:
// 	<input id="num1" class="nums" type="text"/>
// 	<input id="num2" class="nums" type="text"/>
// 	<h3>Sum: <span id="sum"></span></h3>

// Define onchange event handler.
// Add <input> element values.
// Put the sum in the <span> element.
// If values cannot be added, put "Cannot add" in the <span> element
function sumNum1Num2 () {
    let numBox1 = document.getElementById('num1');
    let numBox2 = document.getElementById('num2');
    let sumSpan = document.getElementById('sum');

    sumSpan.innerHTML = '';

    let result = parseInt(numBox1.value) + parseInt(numBox2.value);

    if (result)
        sumSpan.innerHTML = result; 
    else
        sumSpan.innerHTML = "Cannot add";
}

// 7. Skills Event
// NOTE: Write unobtrusive Javascript
// When user selects a skill, create an alert with a message similar to:
// 	"Are you sure CSS is one of your skills?"
// NOTE: no alert should appear when user deselects a skill.
function skillsAlert() {
    let skillsSel = document.getElementsByName('skills');

    for (i of skillsSel)
    {
        switch(i.value)
        {
            case 'java':
                alert('Woo Java. Well done!');
                break;
            case 'javascript':
                alert('Congratulations! JS takes work!');
                break;
            case 'net':
                alert('Wow! .Net is huge.  Well done!');
                break;
            case 'dom':
                alert('Impressive! The DOM is a heavy concept');
                break;
            case 'html':
                alert('Have you considered art school?');
                break;
            case 'css':
                alert('Always an impressive skill. Gratz!')
                break;
            default:
                break;
        }
    }
}

// 8. Favorite Color Event
// NOTE: Write unobtrusive Javascript
// NOTE: This is regarding the favoriteColor radio buttons.
// When a user selects a color, create an alert with a message similar to:
// 	"So you like green more than blue now?"
// In this example, green is the new value and blue is the old value.
// Make the background color (of all favoriteColor radio buttons) the newly selected favoriteColor
let oldColor = "";
let favColorChangedOnce = false;

function saveColor() {
    let colorButtons = document.getElementsByName('favoriteColor');

    if (favColorChangedOnce)
        for (cb in colorButtons)
        {
            if (colorButtons[cb].checked)
                oldColor = colorButtons[cb].value;
        }
}

function alertColor() {
    let colorButtons = document.getElementsByName('favoriteColor');

    if(favColorChangedOnce)
        for (cb in colorButtons)
        {
            if (colorButtons[cb].checked)
                {
                    if (colorButtons[cb].value !== oldColor){
                        alert(`Apparently you prefer ${colorButtons[cb].value} over ${oldColor} now.`);
                        oldColor = colorButtons[cb].value;
                    }
                }
        }

    favColorChangedOnce = true; // Skip the first time, because our alert won't make sense.
}

// 9. Show/Hide Event
// NOTE: Write unobtrusive Javascript
// When user hovers over an employees name:
// 	Hide the name if shown.
// 	Show the name if hidden.

function dis(element, event) 
{
    if (element.style.opacity)
        element.style = "";
    else
        element.style.opacity = 0;
}

// 10. Current Time
// Regarding this element:
// 	<h5 id="currentTime"></h5>
// Show the current time in this element in this format: 9:05:23 AM
// The time should be accurate to the second without having to reload the page.

function updateTime() {
    let d = new Date();
    let hours;
        if (d.getHours() > 12)
            hours = (d.getHours() - 12 + "")
        else if (d.getHours() > 0)
            hours = (d.getHours() + "")
        else
            hours = '12';
    let minutes = (d.getMinutes() + '').padStart(2, 0);
    let seconds = (d.getSeconds() + '').padStart(2, 0);
    let amPm = (d.getHours > 12) ? 'PM' : 'AM';
    let timeString = hours + ':' + minutes + ':' + seconds + ':' + amPm;
    document.getElementById('currentTime').innerHTML = timeString;
}


// 11. Delay
// Regarding this element:
// 	<p id="helloWorld">Hello, World!</p>
// Three seconds after a user clicks on this element, change the text to a random color.

function changeColor(element, event) {
    let red = Math.floor(Math.random(Date.now) * 256);
    let blue = Math.floor(Math.random(Date.now) * 256);
    let green = Math.floor(Math.random(Date.now) * 256);

    element.style.color = `#${red.toString(16)}${green.toString(16)}${blue.toString(16)}`;
}


// 12. Walk the DOM
// Define function walkTheDOM(node, func)
// This function should traverse every node in the DOM. Use recursion.
// On each node, call func(node).
function testFunction(node){
    console.log(`${node.nodeName} tag with ${node.childNodes.length} children and style:  ${node.style}`);
    return;
}

function walkTheDom(func) {
    element = document.getRootNode();
    walkTheDomRecur(element, func);
}

function walkTheDomRecur(element, func) {
    
    func(element);

    for (i of element.childNodes)
    {
        if (element.childNodes.length > 0)
            walkTheDomRecur(i, func);
        else
            return;
    }
}