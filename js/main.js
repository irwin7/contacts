let elInputName = document.getElementById("inputName");
let elInputLName = document.getElementById("inputLName");
let elInputRel = document.getElementById("inputRel");
let elInputNumber = document.getElementById("inputNumber");
let elAddBtn = document.getElementById("add-btn");
let elBtnFamily = document.getElementById("btn-family");
let elBtnFriends = document.getElementById("btn-friends");
let elBtnClassm = document.getElementById("btn-classmates");
let elBtnAll = document.getElementById("btn-all");
let elContactArea = document.querySelector(".contact-area");
let arr = [];
let template = document.querySelector("#template").content;
elAddBtn.addEventListener("click", addContact)
function addContact(e){
  e.preventDefault();

  let userPhone = arr.filter(item => item.num === elInputNumber.value)

  if(elInputName.value != "" && elInputNumber.value != "" && elInputRel.value != "" && userPhone.length === 0){
    let obj = {
      fullName: elInputName.value + " " + elInputLName.value,
      rel: elInputRel.value,
      num: elInputNumber.value
    };
    arr.push(obj)
    render(arr);
    document.querySelectorAll('.form-control').forEach(inp => {inp.value = ''})
  }
}
function render(array) {
  elContactArea.innerHTML = ""

  array.forEach(item => {
     let newTemp = template.cloneNode(true);
     newTemp.querySelector(".contact__title").textContent = item.fullName;
     newTemp.querySelector(".contact__rel").textContent = item.rel;
     newTemp.querySelector(".tel-btn").textContent = item.num;
     newTemp.querySelector(".tel-btn").href = `tel:${item.num}`;
     elContactArea.append(newTemp);
  });
}
elBtnAll.addEventListener('click', function () {
  render(arr)
});

elBtnClassm.addEventListener('click', function () {
  let filter = arr.filter(item => item.rel == "Classmate")
  render(filter)
});

elBtnFamily.addEventListener('click', function () {
  let filter = arr.filter(item => item.rel == "Family")
  render(filter)
});

elBtnFriends.addEventListener('click', function () {
  let filter = arr.filter(item => item.rel == "Friend")
  render(filter)
});