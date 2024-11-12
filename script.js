let userName = prompt('what is your name!')
let userQuest = prompt('what is your quest?!')
let userFavColor = prompt('What is your favorite color?')
let swallowAirspeed = prompt('What is the air speed of an unlaiden swallow?')


let myStory = ` <p>
Hello ${userName}. Answer me these questions three and the other side you'll see.</p>

<p> I see you have already andertrf, do your quest ${userQuest}.
</p>
`
console.log(myStory)

document.getElementById('story') .innerHTML = myStory