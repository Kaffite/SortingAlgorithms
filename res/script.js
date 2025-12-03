// Function for creating element inside the box 
function elementInBox(value, parent){
    let box = document.createElement("div");
    box.classList.add("box");
    box.innerHTML = value;
    document.getElementById(parent).appendChild(box);
}

function keepLastChildOnly(parent){
    const children = document.getElementById(parent);
    while (children.children.length > 1){
        children.removeChild(children.lastElementChild);
    }
}

function IsArrSorted(arr, btnID){
    let arrSorted = true;
    for (i = 1; i < arr.length; i++){
        if (arr[i] < arr[i-1]){
            arrSorted = false;
            break;
        }
    }

    let btn = document.getElementById(btnID);
    if (arrSorted) {
        btn.classList.add("arrSortedBtn");
        btn.innerHTML = "Sorted";
    } else{
        btn.classList.remove("arrSortedBtn");
        btn.innerHTML = "Try to sort";
    }
}


function bogoSort(){
    let parent = "bogo";
    let arr = numbers.slice();
    let newArr = [];
    keepLastChildOnly(parent);

    // Reorder the elements
    while(arr.length != 0){
        let randomIndex = Math.floor(Math.random() * arr.length);
        let value = arr.splice(randomIndex, 1);
        newArr.push(value);
        elementInBox(value, parent);
    }
    IsArrSorted(newArr, "bogoBtn");
    
}

numbers = [1, 2, 3, 4];

for (i = 0; i < numbers.length; i++){
    elementInBox(numbers[i], "bogo");

}
console.log(numbers);
bogoSort();

