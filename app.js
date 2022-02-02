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



// VorSpeise Function
let vorSpeiseBtn = document.getElementById("vorSpeisenBtn");

vorSpeiseBtn.addEventListener('click',function(){
  let vorSpeisenListDisplay = document.getElementById("vorSpeisenList");

  vorSpeisenListDisplay.classList.toggle("displayNoneFood");

})

// Suppe Function
let suppenBtn = document.getElementById("suppenBtn");

suppenBtn.addEventListener('click',function(){
  let suppenListDisplay = document.getElementById("suppenList");

  suppenListDisplay.classList.toggle("displayNoneFood");

})