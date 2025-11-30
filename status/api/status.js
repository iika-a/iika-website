import { status } from "minecraft-server-util";

export default async function handler(req, res) {
  try {
    const server = await status("webgoatguy.iika.pink", 25565);

    res.status(200).json({
      online: true,
      players: server.players.online,
      maxPlayers: server.players.max,
      sample: server.players.sample || [] // player list
    });
  } catch (err) {
    res.status(200).json({ online: false });
  }
}
