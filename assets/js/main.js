function draw() {
  var canvas = document.getElementById("canvas");
  if (canvas.getContext) {
    var ctx = canvas.getContext("2d");
    // Le cornet marron
    ctx.beginPath();
    ctx.moveTo(60, 100); //Je me situe dans la page
    ctx.lineTo(100,240);
    ctx.lineTo(150,100);
    ctx.lineTo(60,100);
    ctx.fillStyle = '#aa6522';
    ctx.fill();
    // La glace pourpre
    // quadraticCurveTo(cp1x, cp1y, x, y)
    // Dessine une courbe de Bézier quadratique depuis la position
    // courante du stylo jusqu'au point final spécifié par x et y,
    // en utilisant le point de contrôle spécifié par cp1x et cp1y.
    ctx.beginPath();
    ctx.moveTo(60, 100);
    ctx.quadraticCurveTo(120, 0, 150, 100);
    ctx.fillStyle = '#8A2110';
    ctx.fill();
  }
}
