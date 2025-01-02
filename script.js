const emulatorButton = document.getElementById('start-emulator');
const closeButton = document.getElementById('close-emulator');
const emulatorWindow = document.getElementById('emulator-window');
const emulatorContainer = document.getElementById('pcjs-container');

emulatorButton.addEventListener('click', () => {
    emulatorWindow.classList.remove('hidden');

    // Inicjalizacja emulacji PCjs
    const emulator = new PCjs.PC({
        "cpu": "8086",
        "ram": 640,
        "video": "CGA",
        "audio": "beep",
        "disk": "floppy",
        "container": emulatorContainer
    });

    // Uruchomienie emulatora
    emulator.start();
});

closeButton.addEventListener('click', () => {
    emulatorWindow.classList.add('hidden');
    emulatorContainer.innerHTML = ''; // Reset emulatora
});
