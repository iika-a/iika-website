async function checkStatus() {
  const div = document.getElementById("status");
  const list = document.getElementById("players");

  list.innerHTML = ""; // clear old list

  try {
    const res = await fetch("/api/status");
    const data = await res.json();

    if (data.online) {
      div.innerText = `Online | ${data.players}/${data.maxPlayers}`;

      div.style.background = "#b6ffb3";

      if (data.sample.length > 0) {
        data.sample.forEach(player => {
          const row = document.createElement("div");
          row.className = "player-row";
          row.innerText = player.name;  // player.name is standard
          list.appendChild(row);
        });
      } else {
        const empty = document.createElement("div");
        empty.className = "no-players";
        empty.innerText = "No players online";
        list.appendChild(empty);
      }

    } else {
      div.innerText = "Offline | Get iika to start the server!";
      div.style.background = "#ffb3b3";
      list.innerHTML = "";
    }

  } catch (e) {
    div.innerText = "Error checking server.";
    div.style.background = "#ffb3b3";
  }
}

checkStatus();
setInterval(checkStatus, 10000);
