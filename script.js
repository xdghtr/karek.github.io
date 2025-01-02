document.addEventListener('DOMContentLoaded', () => {
    const emulatorButton = document.getElementById('start-emulator');
    const closeButton = document.getElementById('close-emulator');
    const emulatorWindow = document.getElementById('emulator-window');
    const emulatorContainer = document.getElementById('pcjs-container');

    let emulator = null;

    emulatorButton.addEventListener('click', () => {
        emulatorWindow.style.display = 'flex';

        // Sprawdzenie, czy emulator już istnieje
        if (!emulator) {
            // Inicjalizacja emulacji PCjs
            emulator = new PCjs.PC({
                cpu: '8086',
                ram: 640,
                video: 'CGA',
                audio: 'beep',
                disk: 'none',
                container: emulatorContainer,
            });

            // Uruchomienie emulatora
            emulator.start();
        }
    });

    closeButton.addEventListener('click', () => {
        emulatorWindow.style.display = 'none';

        // Zatrzymanie emulatora i czyszczenie
        if (emulator) {
            emulator.stop();
            emulator = null;
        }
    });
});
