function onformSubmit(){

}

//Accesing the data in the form
function readFormData(){
    var formData = {};
    formData['name'] = document.getElementById('name').value;
    formData['author'] = document.getElementById('author').value;
    formData['isbn'] = document.getElementById('isbn').value;
    formData['genre'] = document.getElementById('genre').value;


    return formData;
  
}


function onsaveBook(){
    let name = document.getElementById('name').value;
    let author = document.getElementById('author').value;
    let isbn = document.getElementById('isbn').value;
    let genre = document.getElementById('genre').value;

}