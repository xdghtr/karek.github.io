document.getElementById('start-emulator').addEventListener('click', function() {
    const emulatorContainer = document.getElementById('pcjs-container');

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
