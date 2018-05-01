/*  V11 Reqs: 
  toggleAll() method should use forEach()
  visibleOutput.displayItems() should use forEach()
*/

//store all of our inputs for use later.
let inputValue = document.querySelector('#addInput'); //grab input from 'addInput' textbox
let newInputValue = document.querySelector('#newInputValue');
let indexValue = document.querySelector('#indexValue');
let CheckBoxValues = document.querySelectorAll('.toggleBox');

//create our main list object & its methods.
let toDoList = {
  list: [],
  addItem: function(itemText){ //instead of pushing text, push an object instead
   this.list.push({
    textValue: itemText,
    completed: false
   });
  },
  changeItem: function(n, newItemText){
   this.list[n].textValue = newItemText;
  },
  removeItem: function(n){ //take a current index as an input that gets passed into the splice method
    this.list.splice(n, 1);
  },
  toggleCompleted: function(n){ //take an index as an argument
    let toDoItem = this.list[n]; //set to a var for easier access below.
    toDoItem.completed = !toDoItem.completed; //flip it
  },
  toggleAll: function(){
    let count = 0;
    let length = this.list.length;
    this.list.forEach(listItem => {listItem.completed === true ? count++ : null}); //if an item is completed, count++
    this.list.forEach(listItem =>{ //for each item in the list
    	count === length // if count === length
    		? listItem.completed = false //if true, make them false
    		: listItem.completed = true; // if false, make them true
    });
  }//end function
};//end object


//create handlers for 'onclick' usage to avoid having to add event listeners manually and make it neater
let handlers = { 
	addItemHandler: function(){
		toDoList.addItem(inputValue.value); //pass input to addItem()
		inputValue.value = '';
		visibleOutput.displayItems();
	},
	changeItemHandler: function(){
		toDoList.changeItem(indexValue.value, newInputValue.value);
		indexValue.value = '';
		newInputValue.value = '';
		visibleOutput.displayItems();
	},
	removeItemHandler: function(index){ //take an index as an argument that = the current 'position'
		toDoList.removeItem(index); //run the removeItem method with that position
		indexValue.value = '';
		visibleOutput.displayItems();
	},
	toggleItemHandler: function(){
		toDoList.toggleCompleted(indexValue.value);
		indexValue.value = '';
		visibleOutput.displayItems();
	},
	toggleAllHandler: function(){
		toDoList.toggleAll();
		visibleOutput.displayItems();
	}
};

//create object for what the user sees
let visibleOutput = {
	displayItems: function(){
		itemList.innerHTML = ''; //important. by having this line it resets our list.

		toDoList.list.forEach(listItem => {
			let itemEntryDiv = document.createElement('div'),
				toggleBox = document.createElement('input'),
				newItem = document.createElement('p');
				
			itemEntryDiv.classList.add('itemEntry');
			toggleBox.classList.add('toggleBox');
			newItem.classList.add('entry');
			toggleBox.type = 'checkbox';

			listItem.completed === true
				? newItem.textContent = `(x) ${listItem.textValue}` //if true
				: newItem.textContent = `( ) ${listItem.textValue}`; //if false

			itemEntryDiv.appendChild(toggleBox);
			itemEntryDiv.appendChild(newItem);
			itemEntryDiv.appendChild(this.createDeleteButton(toDoList.list.indexOf(listItem))); //add a delete button w/ an Id.
			itemList.appendChild(itemEntryDiv);
		});
	},
	createDeleteButton: function(index){ // make a delete button object for organization purposes.
		let deleteButton = document.createElement('button');
		deleteButton.textContent = 'Delete Item';
		deleteButton.className = 'deleteButton';
		deleteButton.id = index; // make an id for each button as its position.
		return deleteButton; //return the button itself.
	},
	setupEventListeners: function(){ //run this @ start so other methods work.
		let itemList = document.querySelector('#itemList');
		itemList.addEventListener('click', function(event){
			let clickedItem = event.target; //get the element that was clicked
			clickedItem.className === 'deleteButton' ? handlers.removeItemHandler(parseInt(clickedItem.id)) : null;
			// if true, delete clicked item. If not, do nothing.
		});
	}
}

visibleOutput.setupEventListeners(); // setup our event listeners @ start




