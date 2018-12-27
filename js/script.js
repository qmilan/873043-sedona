var button = document.querySelector(".search-button");
var form = document.querySelector("form");
var dateIn = form.querySelector("[id=date-in]");
var dateOut = form.querySelector("[id=date-out]");
var adults = form.querySelector("[id=adults]");
var kids = form.querySelector("[id=kids]");
var storage_adults = localStorage.getItem("adults");
var storage_kids = localStorage.getItem("kids");

/*отображение формы для поиска и localStorage для полей взрослые и дети*/
if (!(form.classList.contains("modal-hidden"))) {
  form.classList.add("modal-hidden")
}
button.addEventListener("click",function (evt) {
  evt.preventDefault();
  form.classList.toggle("modal-show");
  if (!(form.classList.contains("modal-show"))) {
    form.classList.add("modal-hidden");
  } else {
    form.classList.remove("modal-hidden");
  }
  if (storage_adults) {
    adults.value = storage_adults;
  } else {
    adults.focus();
  }
  if (storage_kids) {
    kids.value = storage_kids;
  } else if (!storage_adults)  {
    adults.focus();
  } else {kids.focus();}
});
/*анимация формы*/

/*проверка обязательных полей*/
form.addEventListener("submit", function (evt) {
  //evt.preventDefault();
  if (!dateIn.value || !dateOut.value || !adults.value || !kids.value) {
    evt.preventDefault();
    console.log("Нужно заполнить обязательные поля: дата заезда, дата выезда, взрослые, дети!")
  } else {
    localStorage.setItem("adults", adults.value);
    localStorage.setItem("kids", kids.value);
  }
});

