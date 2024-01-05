var addedElements = [];

function addElement() {
  var elementName = document.getElementById("elementName").value;
  var elementType = document.getElementById("elementType").value;
  var isRequired = document.querySelector('input[name="isRequired"]:checked');

  if (elementName && elementType && isRequired) {
    var label = document.createElement("label");
    label.textContent = elementName + ":";
    var input = document.createElement("input");
    input.type = elementType;

    input.name = elementName;
    
 

    if (isRequired.value === "yes") {
      input.required = true;
      label.innerHTML += '<span style="color: red; margin-left: 3px;">*</span>';
    }

    addedElements.push(label, input);

    document.getElementById("elementName").value = "";
    document.getElementById("elementType").value = "select";

    var isRequiredRadio = document.querySelector('input[name="isRequired"]');

    isRequiredRadio.checked = false;
  } else {
    alert("Please fill out all fields in the main form.");
  }
}



function generateForm() {
    // event.preventDefault();
    var generatedForm = document.createElement("form");
  
    addedElements.forEach(function (element, index, array) {
      
      var container = document.createElement("div");
      container.style.display = 'flex';
      container.style.flexDirection = 'column';
     container.style.marginBottom = '5px'; 


      container.appendChild(element);
      generatedForm.appendChild(container);
  
      
    
    });
    // if(addedElements.length!=0){
    //     document.getElementById('dynamicForm').innerHTML('<h1>Your Form</h1>')
    // }
  
    
    generatedForm.style.display = 'flex';
    generatedForm.style.flexDirection = 'column';
    generatedForm.style.alignItems = 'center';
  
    document.getElementById('dynamicForm').appendChild(generatedForm);
  
    if (addedElements.length != 0) {
      document.getElementById('dynamicForm').style.backgroundColor = 'beige';
      document.getElementById('dynamicForm').style.padding = '5px';
    }
  
    var container = document.getElementById('dynamicForm');
    var newElement = '<button type="button"><b>Submit</b></button>';
    
    if (addedElements.length != 0) {
      container.innerHTML += newElement;

    }
    
    addedElements = [];
  }





