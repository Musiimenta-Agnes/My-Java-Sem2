let data = [
    {id: 1, name: 'Agnes', email: 'musiimentaagnes9@gmail.com'},
    {id: 2, name: 'Abias', email: 'musiimentaabias9@gmail.com'},
    {id: 3, name: 'Osiria', email: 'musiimentaosiriah9@gmail.com'},
    {id: 4, name: 'Dankani', email: 'musiimentadankani9@gmail.com'},
    {id: 5, name: 'Mary', email: 'akellomary345@gmail.com'}
    
]

function readAll () {
    //save our data to local storage
    localStorage.setItem('object', JSON.stringify(data));

    var tabledata = document.querySelector(".data_table");

    var object = localStorage.getItem("object");

    var objectData = JSON.parse(object);

    var elements = '';

    objectData.map(record => {
        elements += `<tr>

        <td>${record.name} </td>
        <td>${record.email} </td>
        <td> 
        <button class="btn btn-primary" onclick="edit(${record.id})">Edit</button>
       <button class="btn btn-danger" onclick="delet(${record.id})">Delete</button>
       </td>

    
        </tr>`

    })

    tabledata.innerHTML = elements;



}


//Now work on the delete function

function delet(id){
    data = data.filter(rec => rec.id !==id); //This is to filter through the ids and ensure to delete the exact id selcted.
    readAll();

}

//Adding the create form when the add button is clicked.

function create () {

    document.querySelector(".create_form").style.display = "block";
    document.querySelector(".add_div").style.display = "none";

}

//Now we work on the add function.
 function add(){
    var name = document.querySelector(".name").value;
    var email = document.querySelector(".email").value;

    // Dynamically assign a new ID
    var newId = data.length + 1;  // Ensures that each new object gets a unique ID based on the data array length

    //We create a new object and add that object to this data

     // We create a new object and add that object to the data array
     var newObject = { id: newId, name: name, email: email };
     data.push(newObject); // Push the new object to the data array
       


        document.querySelector(".create_form").style.display = "none";
        document.querySelector(".add_div").style.display = "block";


        //Now we  raed our data by caling the function
        readAll();

      
 }


 // now we create the edit function
 function edit(id) {
  document.querySelector(".update_form").style.display = "block"
  var obj = data.find(rec => rec.id === id);
  document.querySelector('.uname').value = obj.name;
  document.querySelector('.uemail').value = obj.email;
 }



 //Create the update function

 function update(event) {
    // Prevent form submission behavior (page reload)
    event.preventDefault(); 

    var id = parseInt(document.querySelector(".id").value); // Get the ID from the hidden input
    var name = document.querySelector(".uname").value; // Get the updated name
    var email = document.querySelector(".uemail").value; // Get the updated email

    // Now, let's find the object in the data array and update it
    var index = data.findIndex(rec => rec.id === id);
    
    if (index !== -1) {
        // Update the object in the data array
        data[index] = { id, name, email };
    }

    // Hide the update form and show the add button again
    document.querySelector(".update_form").style.display = "none";
    document.querySelector(".add_div").style.display = "block";

    // Re-render the table with the updated data
    readAll();
}
