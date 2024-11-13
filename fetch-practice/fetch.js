// using fetch to get random dog images from an api 

fetch('https://dog.ceo/api/breeds/image/random')
  .then(response => response.json())
  .then(data => console.log(data))
  .catch(error => console.error('Error fetching the dog image:', error))

  
  // using async & await to get random dog images from api 

  async function getRandomDogPic() {
    try {
        const response = await fetch('https://dog.ceo/api/breeds/image/random')
        const data = await response.json()
        console.log(data) 
    }
    catch(error) {
        console.error('Error fetching the dog image:', error)
    }
  }
  getRandomDogPic() 