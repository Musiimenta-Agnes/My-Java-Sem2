

function onFormSubmit(){
    //Now we call the readform function here
    var formData = readFormData();
    console.log(formData)
    insertNewRecord(formData);


}

///Function to return the input values that we have in our html file.
function readFormData(){
    var formData = {};
    formData["fullName"] = document.getElementById("fullName").value;
    formData["empCode"] = document.getElementById("empCode").value;
    formData["salary"] = document.getElementById("salary").value;
    formData["city"] = document.getElementById("city").value;

    return formData;

     
}

//Using the readFormData fuction, we have to return all the value in our new table (tbody) using the readFormData
function insertNewRecord(data){
    var table = document.getElementById("employeeList").getElementsByTagName("tbody")[0];
    var newRow = table.insertRow(table.length);
    cell1 = newRow.insertCell(0);
    cell1.innerHTML = data.fullName;
    cell2 = newRow.insertCell(1);
    cell2.innerHTML = data.empCode;
    cell3 = newRow.insertCell(2);
    cell3.innerHTML = data.salary;
    cell4 = newRow.insertCell(3);
    cell4.innerHTML = data.city;
    cell5 = newRow.insertCell(4);
    cell5.innerHTML =`<a>Edit</a>
     <a>Delete</a>` 


    

}

