// let paragraph = document.getElementById('paragraph');
 
// console.log(paragraph); // <== <p id="paragraph">What is your name?</p>

// let attribute = paragraph.getAttribute('href');

let button = document.getElementById('go-to-tickets')
button.onclick = function(){
    let body = document.getElementById('body') 
    let home = document.getElementById('home')
    
    let tickets = document.createElement('section');
    tickets.id = "tickets"
    tickets.innerHTML = homeHTML()

    body.removeChild(home)
    body.appendChild(tickets);
}

function homeHTML() {
    return `
    <div class="card" style="width: 18rem;">
    <img src="..." class="card-img-top" alt="...">
    <div class="card-body">
      <h5 class="card-title">Card title</h5>
      <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
      <a href="#" class="btn btn-primary">Go somewhere</a>
    </div>
  </div>
    `
}

let button1 = document.getElementById('go-to-home')
button1.onclick = function(){
    let body = document.getElementById('body') 
    let tickets = document.getElementById('tickets');

    let home = document.createElement('section')
    home.id = "home"
    home.innerHTML="home"

    body.removeChild(tickets)
    body.appendChild(home);
}

