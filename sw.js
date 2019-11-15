console.log("Service Worker Loaded...");

self.addEventListener("push", function(e) {
  const data = e;

  console.log(e);
  
  const title = 'Push Codelab';
  console.log("Push Recieved...");
  self.registration.showNotification(title, {
    body: "Notified by Traversy Media!",
    icon: "http://image.ibb.co/frYOFd/tmlogo.png"
  });
});
