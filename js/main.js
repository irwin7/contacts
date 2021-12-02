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
let contactArr = [];

elAddBtn.addEventListener("click", addContact)
function addContact(e){
  e.preventDefault();
  if(elInputName.value != "" && elInputNumber.value != "" && elInputRel.value != ""){
    let contactInfo = {
      Name : elInputName.value,
      LName : elInputLName.value,
      rel : elInputRel.value,
      tel : elInputNumber.value
    };
    contactArr.push(contactInfo)
    // create element
    let elContact = document.createElement("div");
    let elContactTitle = document.createElement("h4");
    let elContactText = document.createElement("p");
    let elContactTel = document.createElement("a");
    // gettting texts to element
    elContact.className = "contact p-3 border border-start rounded";
    elContactTitle.className = "contact__title";
    elContactText.className = "contact__rel";
    elContactTel.className = "btn btn-success";
    elContactTel.href = `tel:${contactInfo.tel}`;
    elContactTitle.innerHTML = contactInfo.Name + ' ' + contactInfo.LName;
    elContactText.innerHTML = contactInfo.rel;
    elContactTel.innerHTML = contactInfo.tel;
    // append childs
    elContact.appendChild(elContactTitle);
    elContact.appendChild(elContactText);
    elContact.appendChild(elContactTel);
    elContactArea.appendChild(elContact);
    // clearing inputs
    elInputName.value = "";
    elInputLName.value = "";
    elInputRel.value = "";
    elInputNumber.value = "";
  }
}
elBtnFamily.addEventListener("click" , ()=>{
  elContactArea.innerHTML = null;
  contactArr.forEach( function(cInfo) {
    if(cInfo.rel == "Family"){
      let elContactItem = document.createElement("div");
      let elContacttitle = document.createElement("h4");
      let elText = document.createElement("p");
      let elTel = document.createElement("a");
      elContactItem.className = "contact p-3 border border-start rounded";
      elContacttitle.className = "contact__title";
      elText.className = "contact__rel";
      elTel.className = "btn btn-success";
      elTel.href = `tel:${cInfo.tel}`;
      elContacttitle.innerHTML = cInfo.Name + ' ' + cInfo.LName;
      elText.innerHTML = cInfo.rel;
      elTel.innerHTML = cInfo.tel;
      elContactItem.appendChild(elContacttitle);
      elContactItem.appendChild(elText);
      elContactItem.appendChild(elTel);
      elContactArea.appendChild(elContactItem);
    }
  })
});
elBtnFriends.addEventListener("click" , ()=>{
  elContactArea.innerHTML = null;
  contactArr.forEach( function(cInfo) {
    if(cInfo.rel == "Friend"){
      let elContactItem = document.createElement("div");
      let elContacttitle = document.createElement("h4");
      let elText = document.createElement("p");
      let elTel = document.createElement("a");
      elContactItem.className = "contact p-3 border border-start rounded";
      elContacttitle.className = "contact__title";
      elText.className = "contact__rel";
      elTel.className = "btn btn-success";
      elTel.href = `tel:${cInfo.tel}`;
      elContacttitle.innerHTML = cInfo.Name + ' ' + cInfo.LName;
      elText.innerHTML = cInfo.rel;
      elTel.innerHTML = cInfo.tel;
      elContactItem.appendChild(elContacttitle);
      elContactItem.appendChild(elText);
      elContactItem.appendChild(elTel);
      elContactArea.appendChild(elContactItem);
    }
  })
});
elBtnClassm.addEventListener("click" , ()=>{
  elContactArea.innerHTML = null;
  contactArr.forEach( function(cInfo) {
    if(cInfo.rel == "Classmate"){
      let elContactItem = document.createElement("div");
      let elContacttitle = document.createElement("h4");
      let elText = document.createElement("p");
      let elTel = document.createElement("a");
      elContactItem.className = "contact p-3 border border-start rounded";
      elContacttitle.className = "contact__title";
      elText.className = "contact__rel";
      elTel.className = "btn btn-success";
      elTel.href = `tel:${cInfo.tel}`;
      elContacttitle.innerHTML = cInfo.Name + ' ' + cInfo.LName;
      elText.innerHTML = cInfo.rel;
      elTel.innerHTML = cInfo.tel;
      elContactItem.appendChild(elContacttitle);
      elContactItem.appendChild(elText);
      elContactItem.appendChild(elTel);
      elContactArea.appendChild(elContactItem);
    }
  })
});
elBtnAll.addEventListener("click", ()=>{
  elContactArea.innerHTML = null;
  contactArr.forEach( function(cInfo) {
    let elContactItem = document.createElement("div");
    let elContacttitle = document.createElement("h4");
    let elText = document.createElement("p");
    let elTel = document.createElement("a");
    elContactItem.className = "contact p-3 border border-start rounded";
    elContacttitle.className = "contact__title";
    elText.className = "contact__rel";
    elTel.className = "btn btn-success";
    elTel.href = `tel:${cInfo.tel}`;
    elContacttitle.innerHTML = cInfo.Name + ' ' + cInfo.LName;
    elText.innerHTML = cInfo.rel;
    elTel.innerHTML = cInfo.tel;
    elContactItem.appendChild(elContacttitle);
    elContactItem.appendChild(elText);
    elContactItem.appendChild(elTel);
    elContactArea.appendChild(elContactItem);
  })
})