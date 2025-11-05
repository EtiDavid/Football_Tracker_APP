async function loadMatches() {
  try {
    const res = await fetch('https://your-api-domain/matches'); // later replace with real URL
    const data = await res.json();
    const list = document.getElementById('matches');
    data.forEach(match => {
      const li = document.createElement('li');
      li.textContent = `${match.home} vs ${match.away} — ${match.score}`;
      list.appendChild(li);
    });
  } catch (err) {
    console.error('Failed to load matches', err);
  }
}
loadMatches();
