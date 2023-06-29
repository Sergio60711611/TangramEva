function capturarPantalla() {
  const targetElement = document.body;
  html2canvas(targetElement).then(function(canvas) {
    const image = canvas.toDataURL("image/png");

    // Crear un enlace de descarga
    const link = document.createElement("a");
    link.href = image;
    link.download = "captura.png";
    link.click();
  });
}

