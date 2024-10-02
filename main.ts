/**
 * Variablen definieren
 */
// 2 Sekunden warten
// Event-Handler für Button A
input.onButtonPressed(Button.A, function () {
    // Feuchtigkeit vom analogen Sensor an Port P1 messen
    feuchtigkeit = pins.analogReadPin(AnalogPin.P1)
    // RGB-LED Farbe abhängig vom Feuchtigkeitswert setzen
    if (feuchtigkeit <= 8) {
        // Blau bei Feuchtigkeit <= 8
        basic.setLedColor(0x0000ff)
    } else if (feuchtigkeit > 400) {
        // Rot bei Feuchtigkeit > 400
        basic.setLedColor(0xff0000)
    } else {
        // Grün bei Feuchtigkeit zwischen 9 und 400
        basic.setLedColor(0x00ff00)
    }
    // Feuchtigkeitswert auf dem Display anzeigen
    basic.showNumber(feuchtigkeit)
    // Nach 2 Sekunden LED wieder auf gelb setzen
    basic.pause(2000)
    // Gelb
    basic.setLedColor(0xffff00)
})
let feuchtigkeit = 0
// LED auf gelb setzen, um Bereitschaft zu signalisieren
// Gelb
basic.setLedColor(0xffff00)
