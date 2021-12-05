let form = document.getElementById('addForm');
let itemList = document.getElementById('items');
let textType = document.getElementById('textType');
let filter = document.getElementById('filter');

// add evenet
form.addEventListener('submit', addItem);
itemList.addEventListener('click', removeItem);
filter.addEventListener('keyup', filterFunc);

function addItem(e) {
  e.preventDefault();
  // console.log('Hello');
  let newItem = textType.value;
  
  let li = document.createElement('li');
  
  li.className="list-group-item";
  
  li.appendChild(document.createTextNode(newItem));
  
  let deleteBtn = document.createElement('button');

  deleteBtn.className = 'btn btn-danger btn-sm float-end delete';

  deleteBtn.appendChild(document.createTextNode('X'));

  li.appendChild(deleteBtn);
  
  itemList.appendChild(li);

  textType.value = '';
}

// remove item
function removeItem(e) {
  if(e.target.classList.contains('delete')) {
    if(confirm('Are you sure?')) {
      let li = e.target.parentElement;
      itemList.removeChild(li); 
    }
  }
}

// filter items
function filterFunc(e) {
  let text = e.target.value.toLowerCase();

  let items = itemList.getElementsByTagName('li');
  // console.log(items);
   Array.from(items).forEach(function(item) {
     let itemName = item.firstChild.textContent;
     if(itemName.toLowerCase().indexOf(text) != -1) {
       item.style.display = "block";
     } else {
      item.style.display = "none";
     }
   })
} 