/*  V9 Reqs: 
  There should be an li for every item on your list
  There should be a .textValue in every li
  Every li should show .completed
*/

/store all of our inputs for use later.
let inputValue = document.querySelector('#addInput'); //grab input from 'addInput' textbox
let newInputValue = document.querySelector('#newInputValue');
let indexValue = document.querySelector('#indexValue');
let CheckBoxValues = document.querySelectorAll('.toggleBox');

//create our main list object & its methods.
let toDoList = {
  list: [],
  displayItems: function(){
    if(this.list.length < 1){console.log('Your todo list is empty!');}
    else{
        for(let i = 0; i < this.list.length; i++){
          let status; //we only use status here so we can just assign it for this block.
          this.list[i].completed === true ? status = 'completed' : status = 'incomplete'; //I used ternary because condensed.
          console.log(`${this.list[i].textValue}: ${status}`); 
        }//end for loop
    }//end else
  }, //end function
  addItem: function(itemText){ //instead of pushing text, push an object instead
   this.list.push({
    textValue: itemText,
    completed: false
   });
   console.log(this.list);
   return this.list;
  },
  changeItem: function(n, newItemText){
   this.list[n].textValue = newItemText;
   this.displayItems();
   return this.list;
  },
  removeItem: function(n){
    this.list.splice(n, 1);
    this.displayItems();
    return this.list;
  },
  toggleCompleted: function(n){ //take an index as an argument
    let toDoItem = this.list[n]; //set to a var for easier access below.
    toDoItem.completed = !toDoItem.completed; //flip it
  },
  toggleAll: function(){
    let count = 0;
    let length = this.list.length;
    for(let a = 0; a < length; a++){
      if(this.list[a].completed === true){ // if current item is complete, increase count
        count++;
      }
    }
    if(count === length){ // if they're all complete
      for(let b = 0; b < length; b++){
       this.toggleCompleted(b); // make them all incomplete
      }
    }else{
      for(let c = 0; c < length; c++){
        this.list[c].completed = true; //otherwise make them all complete;
      }
    }
    visibleOutput.displayItems(toDoList.list.length-1);
  }//end function
};//end object


//create handlers for 'onclick' usage to avoid having to add event listeners manually and make it neater
let handlers = { 
	displayItemsHandler: function(){visibleOutput.displayItems();},
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
	removeItemHandler: function(){
		toDoList.removeItem(indexValue.value);
		indexValue.value = '';
		visibleOutput.displayItems();
	},
	toggleItemHandler: function(){
		toDoList.toggleCompleted(indexValue.value);
		indexValue.value = '';
		visibleOutput.displayItems();
	},
	toggleAllHandler: function(){toDoList.toggleAll();}
};

//create object for what the user sees
let visibleOutput = {
	displayItems: function(){
		let itemList = document.querySelector('#itemList');
		itemList.innerHTML = ''; // this is important! prevents doubling of items each cycle through loop

		for(let i = 0; i < toDoList.list.length; i++){		 
			let itemEntryDiv = document.createElement('div'),
				toggleBox = document.createElement('input'),
				newItem = document.createElement('p');

			itemEntryDiv.classList.add('itemEntry');
			toggleBox.classList.add('toggleBox');
			newItem.classList.add('entry');
			toggleBox.type = 'checkbox';

			if(toDoList.list[i].completed === true){
				newItem.textContent = `(x) ${toDoList.list[i].textValue}`; //set the text 
			}else{
				newItem.textContent = `( ) ${toDoList.list[i].textValue}`;
			}
		
			itemEntryDiv.appendChild(toggleBox);
			itemEntryDiv.appendChild(newItem);
			itemList.appendChild(itemEntryDiv);
		}
	}
}




