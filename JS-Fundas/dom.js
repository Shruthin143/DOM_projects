//console.dir(document);

// console.log(document.domain)
// console.log(document.URL)
// console.log(document.title)
// document.title = 123

// console.log(document.doctype)
// console.log(document.head)
// console.log(document.body)
// console.log(document.all)
// console.log(document.all[10])
// document.all[10].textContent = "Hello"
// console.log(document.forms)
// console.log(document.links)
//console.log(document.images)

//GET ELEMENT BY ID
//console.log(document.getElementById('header-title'))
// console.log(document.title)
// console.log(document.getElementById('header-title'))
// var ht = document.getElementById('header-title')
// var header = document.getElementById('main-header')
// ht.textContent = 'maximus-prime'
// ht.innerText = 'Goodbye'
// console.log(ht.textContent)
// console.log(ht.innerText)
// ht.innerHTML = '<h3>Hello</h3>'
// ht.style.borderBottom = 'solid 3px #000'
// header.style.borderBottom = 'solid 3px #000'

//GET ELEMENTS BY CLASSNAME
// var items = document.getElementsByClassName('list-group-item')
// console.log(items)
// console.log(items[1])
// items[1].textContent = 'Hello item 2'
// items[1].style.backgroundColor = 'yellow'
// //items.style.backgroundColor = '#f4f4f4' //will not work
// for(var i=0; i<items.length; i++){
//     items[i].style.backgroundColor = '#f4f4f4'
// }

//GET ELEMENTS BY TAGNAME
// var li = document.getElementsByTagName('li')
// console.log(li)
// console.log(li[1])
// li[1].textContent = 'Hello item 2'
// li[1].style.backgroundColor = 'yellow'
// li[1].style.color = 'white'

// for(var i=0; i<items.length; i++){
//     li[i].style.backgroundColor = '#f4f4f4'
// }

//QUERY SELECTOR// it will grab the first element
// var header= document.querySelector('#main-header')
// header.style.borderBottom = 'solid 4px #ccc'
// var inval = document.querySelector('input')
// inval.value= 'Hellow World'

// var sub=document.querySelector('input[type = "submit"]')
// sub.value = 'SEND DUDE'
// var item = document.querySelector('.list-group-item')
// item.style.color = 'red'

// var item = document.querySelector('.list-group-item:last-child')
// item.style.color = 'red'
// var item = document.querySelector('.list-group-item:nth-child(2)')
// item.style.color = 'red'

//QUERY SELECTORALL
// var titles = document.querySelectorAll('.title')
// console.log(titles)
// titles[0].textContent = 'Hell Yes'

// var odd = document.querySelectorAll('li:nth-child(odd)')

// for(var i=0; i<odd.length; i++){
//     odd[i].style.backgroundColor = 'grey'
// }
// var even = document.querySelectorAll('li:nth-child(even)')

// for(var i=0; i<odd.length; i++){
//     even[i].style.backgroundColor = 'red'
// }

//////////VIDEO 2//////////

//var itemlist = document.querySelector('#items')
// console.log(itemlist.parentNode)
// itemlist.parentNode.style.backgroundColor = 'blue'
// console.log(itemlist.parentNode.parentNode)
// console.log(itemlist.parentElement.parentElement)

//CHILD Node
// console.log(itemlist.childNodes)
// console.log(itemlist.children)
// console.log(itemlist.children[1])
// itemlist.children[1].style.backgroundColor = "yellow"
//First child

//console.log(itemlist.firstChild) //doesnt give correct

//First Element Child
// console.log(itemlist.firstElementChild)
// itemlist.firstElementChild.textContent = 'abbeySaale'

// console.log(itemlist.lastElementChild)
// itemlist.lastElementChild.textContent = 'Kabire'

//Next Sibling
// console.log(itemlist.nextSibling)
// console.log(itemlist.nextElementSibling)

//Previous sibling
// console.log(itemlist.previousSibling)
// console.log(itemlist.previousElementSibling)
// itemlist.previousElementSibling.style.backgroundColor='orange'

//Create Element

//Create a div

//var newDiv = document.createElement('div')

// newDiv.className = 'hello'

// newDiv.id = 'hello1'

// newDiv.setAttribute('title','Hello Div')

//Create text node
// var newDivText = document.createTextNode('Hello World');

// // Add text to div
// newDiv.appendChild(newDivText);

// var container = document.querySelector('header .container');
// var h1 = document.querySelector('header h1');

// console.log(newDiv);

// newDiv.style.fontSize = '30px';

// container.insertBefore(newDiv, h1);

////VIDEO 3////

// var button = document.getElementById('button').addEventListener('click', function(){
//     console.log('Button clicked')
// })

//var button = document.getElementById('button').addEventListener('click',buttonClick)

//function buttonClick(){
    // console.log('Button Clicked')
    // document.getElementById('header-title').textContent = 'changed'
    // document.querySelector('#main').style.backgroundColor = 'black'
//}


//function buttonClick(e){
    //console.log(e)
    // console.log(e.target)
    // console.log(e.target.id)
    // console.log(e.target.className)
    // console.log(e.target.classList)
    // var output = document.getElementById('output')
    // output.innerHTML = '<h3>'+e.target.id+'</h3>'

    // console.log(e.type)

    // console.log(e.clientX)
    // console.log(e.clientY)
    // console.log(e.offsetX)
    // console.log(e.offsetY)
    // console.log(e.altKey) //holding the keys - y or n
    // console.log(e.ctrlKey)
    // console.log(e.shiftKey)

//}

// var button = document.getElementById('button')

// //button.addEventListener('click', runEvent)

// //button.addEventListener('dblclick', runEvent)
// //button.addEventListener('mousedown', runEvent)
// button.addEventListener('mouseup', runEvent)



// function runEvent(e){
//     console.log('EVENT TYPE: '+e.type)
// }

//var button = document.getElementById('box')
// button.addEventListener('mouseenter', runEvent)
// button.addEventListener('mouseleave', runEvent)
// button.addEventListener('mouseover', runEvent)
// button.addEventListener('mouseout', runEvent)

//var box = document.getElementById('box')
//box.addEventListener('mousemove', runEvent)

// var itemInput = document.querySelector('input[type = "text"]')
// var form = document.querySelector('form')
// var select = document.querySelector('select')
// itemInput.addEventListener('keydown', runEvent)
// itemInput.addEventListener('keyup', runEvent)
// itemInput.addEventListener('keypress', runEvent)

// itemInput.addEventListener('focus', runEvent)
// itemInput.addEventListener('blur', runEvent)

// itemInput.addEventListener('cut', runEvent)
// itemInput.addEventListener('paste', runEvent)
//itemInput.addEventListener('input', runEvent)

// select.addEventListener('change', runEvent)
// select.addEventListener('input', runEvent)
// form.addEventListener('submit', runEvent)

// function runEvent(e){
//     e.preventDefault()
//     console.log('EVENT TYPE: '+e.type);
    // output.innerHTML = '<h3>MouseX: '+e.offsetX+'</h3><h3>MouseY: '+e.offsetY+'</h3>'   

    // box.style.backgroundColor ="rgb("+e.offsetX+", "+e.offsetY+", 40)"
    // console.log(e.target.value)
    // document.getElementById('output').innerHTML = '<h3>'+e.target.value+'</h3>'
    //document.body.style.display = 'none'
    //console.log(e.target.value)
//}
