var form = document.getElementById('addform')
var itemList = document.getElementById('items')
var filter = document.getElementById('filter')

form.addEventListener('submit', addItem)
function addItem(e){
    e.preventDefault();
    
    //Get input value
    var newItem = document.getElementById('item').value

    //create new li element
    var li = document.createElement('li')
    li.className = 'list-group-item'
    //add text node with input value
    li.appendChild(document.createTextNode(newItem))
    //create del button element
    var delbutton = document.createElement('button')
    //add classes to del button
    delbutton.className = 'btn btn-danger btn-sm float-right delete'
    //append text node
    delbutton.appendChild(document.createTextNode('X'))
    li.appendChild(delbutton)
    itemList.appendChild(li)
}

//Delete event

itemList.addEventListener('click', removeItem)
function removeItem(e){
    if(e.target.classList.contains('delete')){
        if(confirm('Are you sure')){
            var li = e.target.parentElement
            itemList.removeChild(li)
        }
    }    
}
    
filter.addEventListener('keydown', filterItems)
function filterItems(e){
    //convert test to lowercase
    var text = e.target.value.toLowerCase();
    var items = itemList.getElementsByTagName('li')
    ///convert to an array
    Array.from(items).forEach(function(item){
        var itemName = item.firstChild.textContent
        if(itemName.toLocaleLowerCase().indexOf(text) !=-1){
            item.style.display = 'block'
        }else{
            item.style.display = 'none'
        }
    })

}