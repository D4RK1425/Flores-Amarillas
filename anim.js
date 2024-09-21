// Sincronizar las letras con la canción
var audio = document.querySelector("audio");
var lyrics = document.querySelector("#lyrics");

// Array de objetos que contiene cada línea y su tiempo de aparición en segundos
var lyricsData = [
  { text: "Él la estaba esperando con una flor amarilla", time: 16 },
  { text: "Ella lo estaba soñando con la luz en su pupila", time: 24 },
  { text: "Y el amarillo del Sol iluminaba la esquina", time: 32 },
  { text: "Lo sentía tan cercano, lo sentía desde niña", time: 40 },
  { text: "Ella sabía que él sabía", time: 46 },
  { text: "Que algún día pasaría", time: 48 },
  { text: "Que vendría a buscarla Con sus flores amarillas", time: 50 },
  { text: "No te apures, no detengas", time: 99 },
  { text: "El instante del encuentro", time: 100 },
  { text: "Está dicho que es un hecho", time: 103 },
  { text: "No la pierdas, no hay derecho", time: 105 },
  { text: "No te olvides que la vida", time: 107 },
  { text: "Casi nunca está dormida", time: 110 },
  { text: "En ese bar tan desierto nos esperaba el encuentro", time: 133 },
  { text: "Ella llegó en limusina amarilla por supuesto", time: 140 },
  { text: "Él se acercó de repente la miro tan de frente", time: 149 },
  { text: "Toda una vida soñada y no pudo decir nada", time: 156 },
  { text: "Ella sabía que él sabía", time: 203 },
  { text: "Que algún día pasaría", time: 206 },
  { text: "Que vendría a buscarla", time: 208 },
  { text: "Con sus flores amarillas", time: 210 },
  { text: "No te apures, no detengas", time: 216 },
  { text: "El instante del encuentro", time: 218 },
  { text: "Está dicho que es un hecho", time: 220 },
  { text: "No la pierdas, no hay derecho", time: 221 },
  { text: "No te olvides que la vida", time: 224 },
  { text: "Casi nunca está dormida", time: 227 },
  { text: "Flores amarillas", time: 240 },
  { text: "Ella sabía que él sabía", time: 249 },
  { text: "Que algún día pasaría", time: 251 },
  { text: "Que vendría a buscarla", time: 253 },
  { text: "Con sus flores amarillas", time: 255 },
  { text: "No te apures, no detengas", time: 301 },
  { text: "El instante del encuentro", time: 303 },
  { text: "Está dicho que es un hecho", time: 305 },
  { text: "No la pierdas, no hay derecho", time: 307 },
  { text: "No te olvides que la vida", time: 309 },
  { text: "Casi nunca está dormida", time: 313 },
  { text: "Ella sabía que él sabía", time: 318 },
  { text: "Él sabía, ella sabía", time: 322 },
  { text: "Que él sabía, ella sabía", time: 323 },
  { text: "Y se olvidaron de sus flores amarillas", time: 326 },
];


// Animar las letras
function updateLyrics() {
  var time = Math.floor(audio.currentTime);
  var currentLine = lyricsData.find(
    (line) => time >= line.time && time < line.time + 6
  );

  if (currentLine) {
    // Calcula la opacidad basada en el tiempo en la línea actual
    var fadeInDuration = 0.1; // Duración del efecto de aparición en segundos
    var opacity = Math.min(1, (time - currentLine.time) / fadeInDuration);

    // Aplica el efecto de aparición
    lyrics.style.opacity = opacity;
    lyrics.innerHTML = currentLine.text;
  } else {
    // Restablece la opacidad y el contenido si no hay una línea actual
    lyrics.style.opacity = 0;
    lyrics.innerHTML = "";
  }
}

setInterval(updateLyrics, 1000);

//funcion titulo
// Función para ocultar el título después de 216 segundos
function ocultarTitulo() {
  var titulo = document.querySelector(".titulo");
  titulo.style.animation =
    "fadeOut 3s ease-in-out forwards"; /* Duración y función de temporización de la desaparición */
  setTimeout(function () {
    titulo.style.display = "none";
  }, 3000); // Espera 3 segundos antes de ocultar completamente
}

// Llama a la función después de 216 segundos (216,000 milisegundos)
setTimeout(ocultarTitulo, 216000);