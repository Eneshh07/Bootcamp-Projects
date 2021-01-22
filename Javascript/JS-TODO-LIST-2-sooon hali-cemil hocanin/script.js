const addItem = function (e) {
    if(e.key === 'Enter' || e.type === 'click'){
  
      if(document.getElementById('item_name').value.trim() === "") {
        alert('enter a value');
        document.getElementById('item_name').value = "";
      } else {
        //Create <li> item on the fly
        const listItem = document.createElement('li');
        //Create text input for the editing a task
        const textInput = document.createElement('input');
        //Manupulate the textInput attributes
        textInput.className = "item-input";
        textInput.hidden = true;
        //Append the created <input> element into the previously created parent<li> element
        listItem.appendChild(textInput);

      
        //Create text  node item for the editing a task
        const textItem = document.createElement('span');
        //Manupulate the textItem attributes
        textItem.className = "item-text";
        textItem.innerHTML = document.getElementById('item_name').value;
        textItem.addEventListener('click', completeItem);
        //Append the created <input> element into the previously created parent<li> element
        listItem.appendChild(textItem);

       
        //Create editButton for the editing a task
        const editButton = document.createElement('span');
        //Manupulate the editButton attributes
        editButton.className = "btn-edit btn-group-edit";
        editButton.style.color = 'blue';
        editButton.innerHTML = ' - (edit) - ';
        editButton.addEventListener('click', editItem);
        //Append the created editButton into the  parent<li> element
        listItem.appendChild(editButton);




        //Create saveButton for the editing a task
        const saveButton = document.createElement('span');
        //Manupulate the editButton attributes
        saveButton.className = "btn-save btn-group-save";
        saveButton.style.color = 'green';
        saveButton.innerHTML = ' - (save) - ';
        saveButton.hidden = true;
        saveButton.addEventListener('click', saveItem);
        //Append the created editButton into the  parent<li> element
        listItem.appendChild(saveButton);



        //Create removeButton
        const removeButton = document.createElement('span');
        //Manupulate the removeButtons attributes
        removeButton.className = 'btn-remove btn-group-edit'
        removeButton.innerHTML = '(remove)';
        removeButton.style.color = 'red';
        removeButton.addEventListener('click', removeItem);
        //Append the created <span> element into the previously created <li> element
        listItem.appendChild(removeButton);
        

        //Create cancelButton
        const cancelButton = document.createElement('span');
        //Manupulate the cancelButton attributes
        cancelButton.className = "btn-cancel btn-group-save";
        cancelButton.style.color = 'red';
        cancelButton.innerHTML = '(cancel)';
        cancelButton.hidden= true;
        cancelButton.addEventListener('click', cancelItem);
        //Append the created cancelButton into the  parent<li> element
        listItem.appendChild(cancelButton);




  
        //Append the created <li> element into the  <ul> element
        document.getElementById('task_list').appendChild(listItem);
        //Empty the input value
        document.getElementById('item_name').value = "";
      }
    }
  }
  
  const removeItem = function (e) {
    document.getElementById('task_list').removeChild(e.target.parentElement);
  }
  
  const editItem = function (e) {
    const textItem = e.target.parentElement.getElementsByClassName('item-text')[0];
    const textInput = e.target.parentElement.getElementsByClassName('item-input')[0];
    const editGroupButtons = e.target.parentElement.getElementsByClassName('btn-group-edit');
    const saveGroupButtons = e.target.parentElement.getElementsByClassName('btn-group-save');
  
    textItem.hidden = true;
    textInput.hidden = false;
    
  
    for (i of editGroupButtons) {
      i.hidden = true;
    }
  
    for (i of saveGroupButtons) {
      i.hidden = false;
    }
  
    textInput.value = textItem.innerText;
   
    textInput.select();

  }
  


  const cancelItem = function (e) {
    const textItem = e.target.parentElement.getElementsByClassName('item-text')[0];
    const textInput = e.target.parentElement.getElementsByClassName('item-input')[0];
    const editGroupButtons = e.target.parentElement.getElementsByClassName('btn-group-edit');
    const saveGroupButtons = e.target.parentElement.getElementsByClassName('btn-group-save');
  
    textItem.hidden = false;
    textInput.hidden = true;
  
    for (i of editGroupButtons) {
      i.hidden = false;
    }
  
    for (i of saveGroupButtons) {
      i.hidden = true;
    }
  
    textInput.value = textItem.innerText;
  
  }

  const saveItem = function (e) {
    //Select all the HTML elements
    const textItem = e.target.parentElement.getElementsByClassName('item-text')[0];
    const textInput = e.target.parentElement.getElementsByClassName('item-input')[0];
    const editGroupButtons = e.target.parentElement.getElementsByClassName('btn-group-edit');
    const saveGroupButtons = e.target.parentElement.getElementsByClassName('btn-group-save');
  
    //Change display  preferencecs of the elements
    textItem.hidden = false;
    textInput.hidden = true;
  
    for (i of editGroupButtons) {
      i.hidden = false;
    }
  
    for (i of saveGroupButtons) {
      i.hidden = true;
    }
    //Assign Text's Input's value to Text Item's InnerHTML
    if(textInput.value.trim() === "") {
      alert('enter a value');
    } else {
    textItem.innerText = textInput.value;
    }
  }


  const completeItem = function (e) {
    //Select textItem from the HTML elements
    const textItem = e.target.parentElement.getElementsByClassName('item-text')[0];
    if(textItem.style.textDecoration === 'line-through'){
    textItem.style.textDecoration = 'none';
  } else {
    textItem.style.textDecoration = 'line-through'
  }
}

  // document.getElementById('btn_add').onclick = addItem;
  
  document.getElementById('btn_add').addEventListener('click', addItem);
  document.getElementById('item_name').addEventListener('keypress', addItem);
  
  for (i of document.getElementsByClassName('btn-remove')) {
    i.addEventListener('click', removeItem);
  }
  
  for (i of document.getElementsByClassName('btn-edit')) {
    i.addEventListener('click', editItem);
  }
  
  
  for (i of document.getElementsByClassName('btn-cancel')) {
    i.addEventListener('click', cancelItem);
  }

  
  for (i of document.getElementsByClassName('btn-save')) {
    i.addEventListener('click', saveItem);
  }


  
  for (i of document.getElementsByClassName('item-text')) {
    i.addEventListener('click', completeItem);
  }

