# Project Related To DOM 

## project link


## Solution Code

## project 1

```javascript
console.log("Hitesh")

const buttons = document.querySelectorAll('.button')
const body = document.querySelector('body')

buttons.forEach((button)=>{
  console.log(button)
  button.addEventListener('click', (e)=>{
    console.log(e)
    console.log(e.target)
    if(e.target.id === 'grey'){
      body.style.backgroundColor =e.target.id 
    }
    if(e.target.id === 'red'){
      body.style.backgroundColor = e.target.id 
    }
    if(e.target.id === 'blue'){blue
      body.style.backgroundColor = e.target.id 
    }
    if(e.target.id === 'yellow'){
      body.style.backgroundColor = e.target.id 
    }
  })
})

```