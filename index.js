navigator.getUserMedia = navigator.getUserMedia || navigator.webkitGetUserMedia || navigator.mozGetUserMedia;

var localVideo = document.getElementById("localVideo");
var remoteVideo = document.getElementById("remoteVideo");
var localStream;
var constraints = {
	audio: true,
	video: false
};

function successCallback(stream) {
	localVideo.src = URL.createObjectURL(stream);
	localStream = stream;
	var peer = new Peer('myPeerId', {
		host: 'localhost',
		port: 9000,
		path: '/letstalkpeer'
	});

	var call = peer.call('dest-peer-id', stream);

	call.on('stream', function(remoteStream) {
		remoteVideo.src = URL.createObjectURL(remoteStream);
		debugger;
	});
}

function errorCallback(error) {
	console.log("getUserMedia error: ", error);
}

navigator.getUserMedia(constraints, successCallback, errorCallback);