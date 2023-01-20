export default function todoFunctions() {
    let myNudelists = document.getElementsByTagName('li')
    for(let nudeList of myNudelists) {
       const span = document.createElement('span')
       const deleteSign = document.createTextNode('🗙')
       span.className = 'close'
       span.appendChild(deleteSign)
       nudeList.appendChild(span)
    }
    
    const close = document.getElementsByClassName("close");
    for(let closeList of close) {
        closeList.onclick = function() {
            let parentEle = this.parentElement
            parentEle.style.display = 'none'
        }
    }
    
    const list = document.querySelector('ul')
    list.addEventListener('click', (e) => {
        if(e.target.tagName === 'LI') {
            e.target.classList.toggle("checked")
        }
    }, false)
    
    // create new todo to list item when click on addBtn
    
    document.querySelector('.addBtn').addEventListener('click', () => {
        const list = document.createElement('li')
        const inputValue = document.getElementById('todoInput').value
        const  inputTxt = document.createTextNode(inputValue)
        let txt = list.appendChild(inputTxt)
        localStorage.getItem('todo', txt)
    
        if (inputValue === '') {
            document.querySelector('.msg').style.color = 'red'
            document.querySelector('.msg').textContent = `You most Write something`
            document.getElementById('todoInput').style.borderBottom = '2px solid red'
            document.getElementById('todoInput').style.borderLeft = '2px solid red'
        } else {
            document.getElementById('todoUl').appendChild(list)
            document.querySelector('.msg').style.color = '#F2EBE9'
            document.querySelector('.msg').textContent = `My Todo Ap`
            document.getElementById('todoInput').style.borderBottom = 'none'
            document.getElementById('todoInput').style.borderLeft = 'none'
        }
        document.getElementById('todoInput').value = ""
        const span = document.createElement('span')
        const deleteLink = document.createTextNode('🗙')
        span.className = 'close'
        span.appendChild(deleteLink)
        list.appendChild(span)
        
    
        for(let closeList of close) {
            closeList.onclick = function() {
                let parentEle = this.parentElement
                parentEle.style.display = 'none'
            }
        }
    })
}