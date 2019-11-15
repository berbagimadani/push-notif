const webpush = require("web-push"); 


//const vapidKeys = webpush.generateVAPIDKeys();
//console.log(vapidKeys);

let vapidKeys = { publicKey: 'BMNTjCmMklN7gvYefnKND0hz3yKGAJP88tGaEkxwb9C8cKzm5PyV21UJFGfh9EZYBJGuAUvUc4LzEkEGo4ahYQI',
  privateKey: '9wS0wUzUlDH4KqQgriU0liihdyUvYKDS_Al9XPGs8Js' }

//webpush.setGCMAPIKey('AIzaSyC6twzlmXF5KKJS1VVH0C60uqGp0s6oZF4');
/*webpush.setVapidDetails(
  'mailto: example@yourdomain.org',
  vapidKeys.publicKey,
  vapidKeys.privateKey,
);
*/

var options = {
  vapidDetails: {
    subject: 'mailto:example_email@example.com',
    publicKey:  vapidKeys.publicKey,
    privateKey: vapidKeys.privateKey
  },
  TTL: 60
};
const payload = JSON.stringify({ title: "Push Test" });

const pushSubscription = {"endpoint":"https://fcm.googleapis.com/fcm/send/cmm_q08ZaWo:APA91bE-O0Nzg4PjJBr_YS8frzQhM6ZANEh57TqqqQgJhJcvpVh6MVhJlqhzNBtAEOevcsZiQ832R8YvAPcwX_ME5GzJRIF6qfoUICGWkNH0rd6PYhMSQGRla72qf_o6nGCE_iM9rd6M","expirationTime":null,"keys":{"p256dh":"BCpQw3vm7T9qVzyeKnPXwKg3yY27BwikxyPhcVuefFKIzHK24V4R2K5qBPFNQU-9USu4tWWRFmAND44Q5yxCGOQ","auth":"kzGf5IqXLOjp_Ra-n0KQag"}}

webpush.sendNotification(pushSubscription, payload, options).catch( error => {
	console.log(error);
});


