function menuOnClick() {
  document.getElementById("menu-bar").classList.toggle("change");
  document.getElementById("nav").classList.toggle("change");
  document.getElementById("menu-bg").classList.toggle("change-bg");
}

// SPEISE Btn Function 

let foodMenuBtn = document.getElementById("foodMenu");

foodMenuBtn.addEventListener('click', function(){
  let foodListDisplay = document.getElementById("foodList");

  foodListDisplay.classList.toggle("displayNoneFood");
});