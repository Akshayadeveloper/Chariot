
    // Add sound effects for movement and wheels

    const chariot = document.querySelector('.chariot');
    const moveSound = new Audio('horse-gallop.mp3');
    const wheelSound = new Audio('wheel-creaking.mp3');

    chariot.addEventListener('animationiteration', () => {
      moveSound.currentTime = 0;
      moveSound.play();
    });

    const wheels = document.querySelectorAll('.wheel');
    wheels.forEach(wheel => {
      wheel.addEventListener('animationiteration', () => {
        wheelSound.currentTime = 0;
        wheelSound.play();
      });
    });
  
