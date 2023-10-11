let message = document.getElementById("message");
let q=document.getElementById("i1");

let messageOnline = () => {
  message.textContent = "Internet Connection Available";
  message.style.cssText = "background-color: #e7f6d5; color: #689f38";
  q.style.cssText="text-shadow:0 0 10px green, 0 0 50px green";
};
let messageOffline = () => {
  message.textContent = "No Internet Connection";
  message.style.cssText = "background-color: #ffdde0; color: #d32f2f";
  q.style.cssText="text-shadow:0 0 10px red, 0 0 50px red";
};

if (window.navigator.onLine) {
  messageOnline();
} else {
  messageOffline();
}

window.addEventListener("online", messageOnline);
window.addEventListener("offline", messageOffline);
