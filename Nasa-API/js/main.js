//Example fetch using pokemonapi.co

//this event listener is listening for a CLICK from the browser, once it gets an input and you click the button, the getFetch function will run 
document.querySelector('button').addEventListener('click', getFetch)


function getFetch() {
  //first step in this function is that it selects the input value and stores it in the variable choice and console logs it
  const choice = document.querySelector('input').value
  console.log(choice)
  //base URL was the picture of the day. We added another key value to our api url "&date=${choice}", which grabs the input value aka the date and puts in the request to nasa for that input 
  const url = `https://api.nasa.gov/planetary/apod?api_key=SRKG4gKN3HsXyyBJNahdfpVlTACHbZz2uMBRJNKL&date=${choice}`
  fetch(url)
    .then(res => res.json()) // parse response as JSON
    .then(data => {
      console.log(data)
      //puting just media_type wouldnt work, we need to put data. before media_type so that it knows we are referring to the object
      if (data.media_type === 'image') {
        document.querySelector('.photo').src = data.hdurl
      } else if (data.media_type === 'video') {
        document.querySelector('iframe').src = data.url
      }

      document.querySelector('h3').innerText = data.explanation
    })
    .catch(err => {
      console.log(`error ${err}`)
    });
}


