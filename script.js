document.getElementById('startquest').addEventListener('click', function() {

let adjective = prompt("Enter an adjective:")
let noun = prompt("Enter a noun:")
let verb = prompt("Enter a verb:")
let place = prompt("Enter a place:")
let hero = prompt("Enter hero's Name:")

let Story = `<p>In the land of ${place}, there lived a ${adjective} hero named ${hero}.</p> 

<p>One day, ${hero} ${verb} a fearsome ${noun} that threatened the kingdom.</p> 

<p>The battle was fierce, but ${hero} 
emerged victorious, bringing peace back to ${place}.</p>`

document.getElementById('story').innerText = story;
});
























