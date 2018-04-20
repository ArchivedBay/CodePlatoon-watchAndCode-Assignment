//the following isn't really part of the lab, I was just trying to see if I could go about things a different way.
let toDoList = [];

function modifyList(action,input,index){ //the first argument is required, the other two are optional depending on the action
  if(action === 'add'){
    if(input === undefined || input === ' '){ //if our 'add' action isn't followed by a proper 'input' (only looking for null/space
     return alert('please enter an item to add to the list!'); 
    }else{
      toDoList.push(input);
      return toDoList;
    }
  }else if(action === 'change'){
    if(input === undefined || input === ' '){ //check input again
      return alert('please enter a proper change to the list!'); 
    }else if(index < 0 || index > toDoList.length-1 || index === undefined){ //also check to make sure an index was specified
      return alert(`invalid item, please enter a number between 0 and ${toDoList.length-1}`); 
    }else{ 
      toDoList[index] = input;
      return toDoList;
    }
  }else if(action === 'remove'){
    if(typeof input === 'number'){ //if they don't specify a second argument & enter a number, treat it like the index.
      index = input; //set the index to be that number
      input = undefined; //and set input to be undefined.
    }
    if(index === undefined){ //basically if they didn't enter a correct number or else entered only the first argument
      return alert(`Unable to remove, please specify an integer value.`); //since splice() already has (< 0) and (>.array.length) results
    }else{  
      toDoList.splice(index, 1); //else if there's an index, pass it to splice.
      return toDoList;
    }
  }
}



