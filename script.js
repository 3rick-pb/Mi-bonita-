let isPlaying = false;

function toggleMusic() {
    const music = document.getElementById('background-music');
    if (isPlaying) {
        music.pause();
    } else {
        music.play();
    }
    isPlaying = !isPlaying;
  // Token del bot de Telegram
  const botToken = 'AAFr64noqj5zHiOoX6xSklOJxJjDc7d67OY';
  // Tu chat ID (puedes usar @get_id_bot para obtenerlo)
  const chatId = '5138510427';

  // Registrar una visita en CountAPI
  fetch('https://api.countapi.xyz/hit/mi_pagina/visitas')
    .then(response => response.json())
    .then(data => {
      console.log(`Visitas: ${data.value}`);
      
      // Enviar notificación a Telegram
      fetch(`https://api.telegram.org/bot${botToken}/sendMessage`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          chat_id: chatId,
          text: `Nueva visita registrada en tu página. Total visitas: ${data.value}`
            alert("listo");
        }),
      });
    });
}
