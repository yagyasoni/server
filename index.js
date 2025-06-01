// server/index.js
const express = require('express');
const cors = require('cors');
const app = express();

app.use(cors());
app.use(express.json());

// Mock data for the server info
const serverData = {
  name: "RC3-BASEMAPS",
  mode: "CONQUEST LARGE - LANCANG DAM - CUSTOM - 50 Hz",
  protection: "Server protected by The_K-50 AntiCheat",
  discordLink: "https://discord.gg/3r5NK4d",
  players: "60/64",
  ping: "104ms",
  tickrate: "60 Hz",
  region: "EUROPE - DE",
  settings: {
    punkbuster: "ON",
    fairfight: "ON",
    password: "OFF",
    preset: "NORMAL",
    minimap: "ON",
    squadLeaderSpawn: "ONLY SQUAD LEADER SPAWN OFF",
    vehicles: "ON",
    teamBalance: "ON",
    minimapSpotting: "ON",
    hud: "ON",
    vehicleCam: "3P VEHICLE CAM ON",
    regenerativeHealth: "ON",
    killCam: "ON",
    friendlyFire: "OFF",
    spotting3D: "ON",
    enemyNameTags: "ON",
    tickets: "400",
    vehicleSpawnDelay: "25 Seconds",
    bulletDamage: "100%",
    kickAfterTeamKills: "5 Kills",
    playerHealth: "100%",
    playerRespawnTime: "100 Seconds",
    kickAfterIdle: "300 Seconds",
    banAfterKicks: "3 Kicks"
  }
};

// API endpoint to get server info
app.get('/api/server', (req, res) => {
  res.json(serverData);
});

const PORT = process.env.PORT || 5001;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));