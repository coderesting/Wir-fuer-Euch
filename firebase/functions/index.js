// The Cloud Functions for Firebase SDK to create Cloud Functions and setup triggers.
const functions = require('firebase-functions');

// The Firebase Admin SDK to access the Firebase Realtime Database.
const admin = require('firebase-admin');
admin.initializeApp();



function updatePoints(uid,points)
{
  admin.database().ref('/points').child(uid).set(points);
}

function readPoints(uid)
{
	var points=0;
	
		
  admin.database().ref('/points/' + uid).once('value')
  .then(function(dataSnapshot) {
    //return Number(dataSnapshot.val());
	console.log("Points:"+ Number(dataSnapshot.val()));
	this.points=Number(dataSnapshot.val());
  });
	 
	return points;
}


exports.addPoints = functions.https.onRequest(async (req, res) => {
  var points = Number(req.query.points);
  
  // TODO other way to read the uid instead of request param
  const uid = req.query.uid;
  
  
  admin.database().ref('/points/' + uid).once('value')
  .then(function(dataSnapshot) {
	points = Number(dataSnapshot.val()) + points;
	updatePoints(uid,points);
	
	res.status(200).send(String("OK"));
  });

});


exports.readPoints = functions.https.onRequest(async (req, res) => {
  
  // TODO other way to read the uid instead of request param
  const uid = req.query.uid;
	
  admin.database().ref('/points/' + uid).once('value')
  .then(function(dataSnapshot) {
	var points = Number(dataSnapshot.val());
	
	res.status(200).send(String(points));
  });
	
});


