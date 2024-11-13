const paragraphElement = document.getElementById('message');

let worker = new Worker('./workers.js');

// sends message to the worker to start the calculation
worker.postMessage('calculate square');

// result from the worker and display it
worker.addEventListener('message', function(event) {
    paragraphElement.innerText = event.data
    console.log('Worker result:', event.data)
})