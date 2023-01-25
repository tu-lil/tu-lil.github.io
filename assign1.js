/* 

function 
    - > loop
        - > loop

*/

let maxOuterListItems = 3, maxInnerListItems = 5;


window.addEventListener("load", (event) => {
    console.log("page is fully loaded");
    createAList(maxOuterListItems, maxInnerListItems);
});


console.log('11111111');

// Types of functions:
// IIFE function
// regular named function
// anonymous functions
// arrow functions =>

const createAListByUserInput = () => {
    if (innerListMax.value && outerListMax.value) {
        createAList(outerListMax.value, innerListMax.value);
    }
}


const createAList = (outerListValueParam, innerListValueParam) => {
   // console.log('hhhhhhh hhhhh inside the function ');
    const elem =  document.getElementById("myList");
    const myOuterUlElem =  document.getElementById("myOuterList");
    // truthy - falsy
    if (myOuterUlElem) {
        // if ul element already exist then delete first before creating new
        // this is to not have previously created ul on the page
        myOuterUlElem.remove();
    }

    // solution # 1
    // if (innerListMax.value && outerListMax.value) {
    //     maxOuterListItems = outerListMax.value;
    //     maxInnerListItems = innerListMax.value;
    // }

    // create outer ul
    const outerUL = document.createElement("ul");
    outerUL.setAttribute('id', 'myOuterList');
    elem.appendChild(outerUL);

    // - > outer loop
    for (let outerLiCounter = 0; outerLiCounter < outerListValueParam; outerLiCounter++ ) {
       // console.log('in loop ', outerLiCounter );
        // create outer li items
        const outerLiItem = document.createElement("li");
        const outerValueToDisplay = outerLiCounter + 1;
        const textnode = document.createTextNode(outerValueToDisplay);
        outerLiItem.appendChild(textnode);
        outerUL.appendChild(outerLiItem);

        // create outer ul
        const innerUL = document.createElement("ul");
        outerLiItem.appendChild(innerUL);

        // - > inner loop
        for (let innerLiCounter = 0; innerLiCounter < innerListValueParam; innerLiCounter++ ) {
                // create inner li items
                const innerLiItem = document.createElement("li");
                const innerValueToDisplay = innerLiCounter + 1;
                const sumOfOuterAndInnerValues = outerValueToDisplay + innerValueToDisplay;
                const innerTextNode = document.createTextNode(`${outerValueToDisplay} + ${innerValueToDisplay} = ${sumOfOuterAndInnerValues}`);
                innerLiItem.appendChild(innerTextNode);
                innerUL.appendChild(innerLiItem);
        }
    }  
}


console.log('222222')

// sfsfsdfsd
// 000jkkkn ikkk

