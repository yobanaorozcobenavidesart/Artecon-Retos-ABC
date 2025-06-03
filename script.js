function rollDice() {
  const dice = document.getElementById('dice');
  const roll = Math.floor(Math.random() * 6) + 1;

  // Generar rotaciones para simular el lanzamiento
  const xRotation = Math.floor(Math.random() * 4 + 1) * 90;
  const yRotation = Math.floor(Math.random() * 4 + 1) * 90;

  dice.style.transform = `rotateX(${xRotation * roll}deg) rotateY(${yRotation * roll}deg)`;

  // Ejecutar la acción correspondiente después de 1 segundo (animación del dado)
  setTimeout(() => {
    if (roll % 2 === 0) {
      showChallenge();
    } else {
      showQuestion();
    }
  }, 1000);
