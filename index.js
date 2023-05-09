

var input = document.querySelector("#input");
var button = document.querySelector(".btn");
var list = document.querySelector(".solo");//outpute libech ndkhlo add outpute


button.addEventListener("click", function() {
  if (input.value === "") {
    alert("write something !");
  } else {
    var lis = document.createElement("li");//les points bech yokhrjo
    lis.innerHTML = input.value;//ajoutina feha chektbna fi input value
    list.appendChild(lis);//  ADD
    var btnDelete = document.createElement("button"); // create the delete button
    btnDelete.innerHTML = "Delete";//atiteh delet samiteha
    btnDelete.setAttribute("class", "btnDelete");//give a className of the buton(atit lel class name buton samito btn dlete.)

    lis.appendChild(btnDelete); // append the delete button to the list item( kol star  takher mah butoon delete tea3o)
    btnDelete.addEventListener("click", function() { // add event listener to the delete button//action li dlete
    lis.remove(); // remove the corresponding li
    });
  }
  input.value = "";
});


    

























