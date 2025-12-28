<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>💀 NØ MΞЯCY 💀 | README</title>

  <!-- Google Fonts -->
  <link href="https://fonts.googleapis.com/css2?family=Orbitron:wght@400;600;800&family=Fira+Code&display=swap" rel="stylesheet">

  <!-- AOS Animations -->
  <link href="https://unpkg.com/aos@2.3.4/dist/aos.css" rel="stylesheet">

  <style>
    :root {
      --bg: #050505;
      --card: #0d0d0d;
      --neon: #ff004c;
      --cyan: #00ffd5;
      --text: #eaeaea;
    }

    * {
      margin: 0;
      padding: 0;
      box-sizing: border-box;
    }

    body {
      font-family: 'Fira Code', monospace;
      background: radial-gradient(circle at top, #0a0a0a, #000);
      color: var(--text);
      line-height: 1.6;
    }

    header {
      min-height: 100vh;
      display: flex;
      align-items: center;
      justify-content: center;
      text-align: center;
      background: linear-gradient(135deg, #0f0c29, #302b63, #24243e);
    }

    header h1 {
      font-family: 'Orbitron', sans-serif;
      font-size: 3.2rem;
      letter-spacing: 3px;
      color: var(--neon);
      text-shadow: 0 0 25px var(--neon);
      animation: glow 2s infinite alternate;
    }

    header p {
      margin-top: 1rem;
      color: var(--cyan);
      font-size: 1.1rem;
    }

    @keyframes glow {
      from { text-shadow: 0 0 10px var(--neon); }
      to   { text-shadow: 0 0 35px var(--neon); }
    }

    section {
      max-width: 1000px;
      margin: auto;
      padding: 4rem 1.5rem;
    }

    .card {
      background: var(--card);
      border-radius: 18px;
      padding: 2rem;
      margin-bottom: 2rem;
      box-shadow: 0 0 30px rgba(255,0,76,0.15);
    }

    .card h2 {
      font-family: 'Orbitron', sans-serif;
      color: var(--cyan);
      margin-bottom: 1rem;
    }

    ul {
      margin-left: 1.2rem;
    }

    ul li {
      margin-bottom: .5rem;
    }

    code {
      display: block;
      background: #000;
      border-left: 4px solid var(--neon);
      padding: 1rem;
      border-radius: 10px;
      margin-top: 1rem;
      white-space: pre-wrap;
      font-size: 0.9rem;
    }

    footer {
      text-align: center;
      padding: 2rem;
      background: #000;
      color: #777;
      font-size: 0.9rem;
    }
  </style>
</head>
<body>

<header>
  <div data-aos="zoom-in">
    <h1>💀 NØ MΞЯCY 💀</h1>
    <p>Next-Generation WhatsApp MD Bot<br>Asitha-MD V6 Inspired</p>
  </div>
</header>

<section>
  <div class="card" data-aos="fade-up">
    <h2>🚀 About</h2>
    <p>
      <b>NØ MΞЯCY</b> is a next-generation WhatsApp Multi-Device bot built for speed,
      power and stability. Inspired by the legendary Asitha-MD V6 style, this bot
      delivers clean structure, smart automation and full control —
      <b>no limits, no mercy.</b>
    </p>
  </div>

  <div class="card" data-aos="fade-right">
    <h2>✨ Features</h2>
    <ul>
      <li>⚡ Ultra-Fast Command Handler</li>
      <li>👥 Advanced Group Management</li>
      <li>🖼️ Media Tools & Downloaders</li>
      <li>🧩 Plugin-Based System</li>
      <li>🔐 Owner & Admin Controls</li>
      <li>♻ Auto Restart & Error Handler</li>
    </ul>
  </div>

  <div class="card" data-aos="fade-left">
    <h2>🛠 Installation</h2>
    <code>
pkg update && pkg upgrade
pkg install git nodejs ffmpeg -y

git clone https://github.com/YourUsername/NoMercy-MD
cd NoMercy-MD
npm install
node .
    </code>
  </div>

  <div class="card" data-aos="fade-up">
    <h2>⚙ Configuration</h2>
    <code>
OWNER_NUMBER=94XXXXXXXXX
BOT_NAME=💀 NØ MΞЯCY 💀
MODE=public
SESSION_ID=YOUR_SESSION_ID
    </code>
  </div>
</section>

<footer>
  ⚡ NØ MΞЯCY — Power Without Mercy ⚡
</footer>

<script src="https://unpkg.com/aos@2.3.4/dist/aos.js"></script>
<script>
  AOS.init({
    once: true,
    duration: 1200
  });
</script>

</body>
</html>
