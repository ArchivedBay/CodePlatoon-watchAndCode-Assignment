// create a variable to hold the list items for our to do list. could use an object, but lab calls for an array
let toDoList = [];

// then we need a way to display the items in that list. let's call that function displayItem();

// after that, we need a way to add a new item to the to do list. We can do that via a function as well, addItem();
function displayItems(list){ //take our toDoList array as an argument.
  return list;
}
function addItem(item){ //let it take an argument that is the item as a string.
  toDoList.push(item);
  return displayItems(toDoList); //note, this is just for testing purposes, you could just return toDoList instead.
}
function changeItem(n, input){ //take two arguments: the index to modify, and the new input.
  toDoList[n] = input;
  return displayItems(toDoList); //same as above, this is just for testing. you can just return toDoList, like we did below.
}
function removeItem(n){ //one argument: starting index of splice.
  toDoList.splice(n, 1);
  return toDoList;
}


//now if we want to edit a pre-existing item on the list, we can do this simply changing the array index itself,
//which we can put in another function for usability later. changeItem();
//changeItem(2, 'flowers'); would change the 3rd item in the array.

//finally, in v1.0 we want to add a way to delete an item. We can do this via splice in a function as well. removeItem();
//removeItem(1,1); would remove only the second item.


