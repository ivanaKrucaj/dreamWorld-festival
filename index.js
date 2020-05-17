console.log("Loaded");


let home = document.getElementById('home');
let features = document.getElementById('features');

function allSections(){
    return [...document.getElementsByClassName('section')]
}

function show(sectionName){
    allSections().forEach(section => {
        if(section.id === sectionName){
            section.classList.remove('hidden')
        } else {
            section.classList.add('hidden')
        }
    })
}

window.addEventListener('load', () => {
    // const calculatePricesBtn = document.getElementById('calculate');
    // calculatePricesBtn.addEventListener('click', calculateAll);
  
    document.getElementsByTagName('nav-item a');
  });

  function linkClicked(element){
    [...document.getElementsByTagName('nav-item a')]
  }

  // dohvati sve linkove. za svaki link dodaj click listener i pozovi funkciju link clicked, koja ce primiti taj html element