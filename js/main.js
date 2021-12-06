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
  if(elInputName.value != "" && elInputNumber.value != "" && elInputRel.value != ""){
    let obj = {
      fullName: elInputName.value + " " + elInputLName.value,
      rel: elInputRel.value,
      num: elInputNumber.value
    };
    console.log(isSame);
    if(isSame != true){
      arr.push(obj);
      render(arr);
    }else{
      alert("bunday raqam mavjud")
    }
    document.querySelectorAll('.form-control').forEach(inp => {inp.value = ''})
    }
}
  let isSame = false;
  elInputNumber.addEventListener("keyup",()=>{
  arr.forEach((item) => {
    if(item.num == elInputNumber.value){
      isSame = true;
    }else{
      isSame = false;
    }
  });
})
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