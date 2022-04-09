//Get a dog photo from the dog.ceo api and place the photo in the DOM

document.querySelector('button').addEventListener('click', showInformation)

function showInformation(){

let busId = document.querySelector('input').value

fetch(`https://svc.metrotransit.org/nextripv2/${busId}`)
    .then(res => res.json()) // parse response as JSON
    .then(data => {
      console.log(data)
      document.querySelector('h2').innerText = "ALERT: "+data.alerts[0].alert_text
      document.querySelector('h3').innerText = "You are at " +data.stops[0].description +"."

    })
    .catch(err => {
        console.log(`error ${err}`)
    });

  }





