/*  V7 Reqs: 
  There should be a 'display items' button and a 'toggle all' button in the app.
  clicking the display button should call toDoList.displayItems()
  clicking the toggle all button should run toDoList.toggleAll()
  
  NOTE from here on, changes will start being made to index.htm as well for the actual interface.
*/


let toDoList = {
  list: [],
  displayItems: function(){
    if(this.list.length < 1){console.log('Your todo list is empty!');} //note, if you have it 'return' instead it causes issues.
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
   return this.list;
  },
  changeItem: function(n, newItemText){
   this.list[n].textValue = newItemText;
   return this.list;
  },
  removeItem: function(n){
    this.list.splice(n, 1);
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
  }//end function
};//end object

// grab our buttons and store them in a variable then add a click listener to them. 
let selectAllItems = document.getElementById('toggleAllBtn');
let displayCurrentItems = document.getElementById('displayItemBtn');

selectAllItems.addEventListener('click', function(){
  	toDoList.toggleAll();
});
displayCurrentItems.addEventListener('click', function(){
	toDoList.displayItems();
});






