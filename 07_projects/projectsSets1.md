# Project related to DOM

## project link
[Click here](https://stackblitz.com/edit/vitejs-vite-er5nuqyd?file=index.html,project1.js&terminal=dev)

# Solution code

## project 1

```javascript
console.log("shashank")
const buttons = document.querySelectorAll('.button');
const body = document.querySelector('body');

buttons.forEach(function button) {
  console.log(button);
  button.addEventListener('click', function (e){
    console.log(e);
    console.log(e.target);
    if (e.target.id === 'grey') {
      body.style.backgroundColor = e.target.id;
    }
    if (e.target.id === 'white') {
      body.style.backgroundColor = e.target.id;
    }
    if (e.target.id === 'blue') {
      body.style.backgroundColor = e.target.id;
    }
    if (e.target.id === 'yellow') {
      body.style.backgroundColor = e.target.id;
    }
  })
};

```

## Projects 2 solution code


```javascript

const form = document.querySelector('form')

form.addEventListener('submit', function(e){
   e.preventDefault()

  const height = parseINT(document.querySelector('#height').value)
  const weight = parseINT(document.querySelector('#weight').value)
  const results = parseINT(document.querySelector('#results').value)

  if(height === '' || height < 0 || isNaN(height)){
    results.innerHTML = `Please give a valid height ${height}`;
  }
  else if(weight === '' || weight < 0 || isNaN(weight)){
    results.innerHTML = `Please give a valid weight ${weight}`;
  }
  else {
    const bmi =  (weight / ((height*height)/10000)).toFixed(2)
    // show the result
    results.innerHTML = `<span> ${bmi}</span>`;
  }
});


```

## project 3 solution code

```javascript

const clock = document.getElementById('colck')
// const clock = document.queySelector('#clock)


setInterval(function(){
    let date = new Date();
    // console.log(date.tolocaleTimeString());
    clock.innerHTML = date.toLocaleTimeString();
}, 1000);

```