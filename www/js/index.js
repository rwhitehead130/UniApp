
document.addEventListener("deviceready", onDeviceReady, false);
function onDeviceReady() {
    console.log(navigator.camera);
}

function capturePhoto() {
	// Take picture using device camera and retrieve image as base64-encoded string
	navigator.camera.getPicture(onSuccess, onFail,{
	quality : 50, 
	destinationType : Camera.DestinationType.FILE_URI,
	saveToPhotoAlbum: true });
}
   

