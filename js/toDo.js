/*  V5 Reqs: 
  displayItems should show toDoList.textValue
  displayItems should tell you if your toDoList is empty
  displayItems should show you .completed.
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
  toggleCompleted: function(n){
    let booli = this.list[n]; //set to a var for easier access below.
    booli.completed = !booli.completed;
  },
  toggleAll: function(){
    for(let i = 0, count = 0 i < this.list.length; i++){ //for each item in the list
      if(this.list[i].completed === true){ // if current item is completed, increase count
       count++; 
      }
    }
    if(count === this.list.length){ // if all items are completed
      for(let i = 0; i < this.list.length; i++){
        this.toggleCompleted[i]; // make them all false
      }
    }else{
     for(let i = 0; i < this.list.length; i++){ // otherwise if ANY are not (since count !== this.list.length)
        this.list[i].completed = true; // make them all true
     }
    }
  }
};







