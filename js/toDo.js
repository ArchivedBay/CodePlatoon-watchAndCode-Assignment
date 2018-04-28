/*  V8 Reqs: 
  There should be a button for adding new items
  There should be a button for deleting items
  There should be a button for toggling items

  Start refactoring to improve readability, i.e w/ event listeners
*/

//store all of our inputs for use later.
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
    this.displayItems();
  }//end function
};//end object

/*
note, the below is mostly used if you ONLY need to deal with click events, 
if you need more functionality consider using addEventListener instead. **/

//create handlers for 'onclick' usage to avoid having to add event listeners manually and make it neater
let handlers = { 
	displayItemsHandler: function(){toDoList.displayItems();},
	toggleAllHandler: function(){toDoList.toggleAll();},
	addItemHandler: function(){
		toDoList.addItem(inputValue.value); //pass input to addItem()
		inputValue.value = ''; //reset the text box
	},
	changeItemHandler: function(){
		toDoList.changeItem(indexValue.value, newInputValue.value);
		indexValue.value = '';
		newInputValue.value = '';
	},
	removeItemHandler: function(){
		toDoList.removeItem(indexValue.value);
		indexValue.value = '';
	},
	toggleItemHandler: function(){
		toDoList.toggleCompleted(indexValue.value);
		indexValue.value = '';
	}
};





