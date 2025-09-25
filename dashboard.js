function updateClock() {
  const now = new Date();
  const h = now.getHours().toString().padStart(2, "0");
  const m = now.getMinutes().toString().padStart(2, "0");
  document.getElementById("clock").textContent = `${h}:${m}`;

  // greeting
  let greeting = "Hello,";
  if (now.getHours() < 12) greeting = "Good morning,";
  else if (now.getHours() < 18) greeting = "Good afternoon,";
  else greeting = "Good evening,";
  document.getElementById("greeting").textContent = greeting;
}

setInterval(updateClock, 1000);
updateClock();
