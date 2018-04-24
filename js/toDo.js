// create an object to hold the list items for our to do list. as well as the methods to alter the list.
let toDoList = {
  list: [],
  displayItems: function(list){
    return this.list; 
  },
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
    return this.list;
  }
};







