async function checkStatus() {
    try {
      const res = await fetch("/api/status");
      const data = await res.json();
  
      const div = document.getElementById("status");
  
      if (data.online) {
        if (data.players == 1) div.innerText = `Online — ${data.players} player online`;
        else div.innerText = `Online — ${data.players} players online`;

        div.style.background = "#b6ffb3"; // green-ish
      } else {
        div.innerText = "Offline";
        div.style.background = "#ffb3b3"; // red-ish
      }
    } catch (e) {
      document.getElementById("status").innerText = "Error checking server.";
    }
  }
  
  checkStatus();
  setInterval(checkStatus, 10000); // auto-refresh every 10s
  