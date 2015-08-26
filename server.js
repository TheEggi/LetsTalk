var PeerServer = require('peer').PeerServer;
var peerserver = PeerServer({port: 9000, path: '/letstalkpeer'});


peerserver.on('connection', function(id) {  
    console.log("[+] NEW PEER CONNECTION from peerjs: "+id);
    // accept or reject code can go here if needed
});
peerserver.on('disconnect', function(id) {  
    console.log("[-] END OF PEER CONNECTION from peerjs: "+id);
    // accept or reject code can go here if needed
});