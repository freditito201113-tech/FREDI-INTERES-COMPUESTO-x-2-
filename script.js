function calcular() {
  let C = parseFloat(document.getElementById("capital").value);
  let tasa = parseFloat(document.getElementById("tasa").value) / 100;
  let tiempo = parseFloat(document.getElementById("tiempo").value);
  let unidad = document.getElementById("unidadTiempo").value;
  let frecuencia = parseInt(document.getElementById("frecuencia").value);

  if (isNaN(C) || isNaN(tasa) || isNaN(tiempo)) {
    document.getElementById("resultado").innerHTML = "<b>Por favor, completa todos los campos.</b>";
    return;
  }

  // Convertir tiempo a años
  let nAnios = 0;
  if (unidad === "dias") nAnios = tiempo / 365;
  if (unidad === "meses") nAnios = tiempo / 12;
  if (unidad === "anios") nAnios = tiempo;

  // Fórmula del interés compuesto
  let M = C * Math.pow(1 + tasa / frecuencia, frecuencia * nAnios);
  let I = M - C;

  document.getElementById("resultado").innerHTML = `
    <p><b>Monto Final (M):</b> $${M.toFixed(2)}</p>
    <p><b>Interés Generado (I):</b> $${I.toFixed(2)}</p>
  `;
}