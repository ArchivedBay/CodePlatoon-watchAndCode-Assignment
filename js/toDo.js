/*  V6 Reqs: 
  it should have a method, toggleAll(), that if all items are true, makes them false
  otherwise make them all true.
*/
let toDoList = {
  list: [],
  displayItems: function(){
    if(this.list.length < 1){return 'Your todo list is empty!';}
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
};







