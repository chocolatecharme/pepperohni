// Our camera will start facing outwars and audio won't be
// recorded
var constraints = { video: { facingMode: "environment" }, audio: false };

// Define the constants for all the html parts we created
const cameraView = document.querySelector("#camera--view"),
    cameraOutput = document.querySelector("#camera--output"),
    cameraSensor = document.querySelector("#camera--sensor"),
    cameraTrigger = document.querySelector("#camera--trigger")

// This method will access the user's camera given the constraints
// we defined. It "streams" the video instead of recording
function cameraStart() {
    navigator.mediaDevices
        .getUserMedia(constraints)
        .then(function(stream) {
        track = stream.getTracks()[0];
        cameraView.srcObject = stream;
    })
    .catch(function(error) {
        console.error("Oops. Something is broken.", error);
    });
}

// Grab a frame/screengrab of our stream, aka take a picture
cameraTrigger.onclick = function() {
    cameraSensor.width = cameraView.videoWidth;
    cameraSensor.height = cameraView.videoHeight;
    cameraSensor.getContext("2d").drawImage(cameraView, 0, 0);
    cameraOutput.src = cameraSensor.toDataURL("image/webp");
    cameraOutput.classList.add("taken");
};

// Calls cameraStart once the window has finished loading
window.addEventListener("load", cameraStart, false);