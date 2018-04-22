// create an object to hold the list items for our to do list. as well as the methods to alter the list.
let toDoList = {
  list: [],
  displayItems: function(list){
   return list; 
  },
  addItem: function(item){
   this.list.push(item);
   return this.list;
  },
  changeItem: function(n, input){
   this.list[n] = input;
   return this.list;
  },
  removeItem: function(n){
    this.list.splice(n, 1);
    return this.list;
  }
};

// toDoList.addItem('plant tree'); would add 'plant tree' to the list







