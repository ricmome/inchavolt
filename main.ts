Mbit_IR.onPressEvent(RemoteButton.Power, function () {
    HelloBot.RGB_Car_Program().showColor(neopixel.colors(NeoPixelColors.Red))
    HelloBot.RGB_Car_Program().show()
})
Mbit_IR.onPressEvent(RemoteButton.NUM8, function () {
    HelloBot.RGB_Line_Program().showColor(neopixel.colors(NeoPixelColors.Blue))
    HelloBot.RGB_Line_Program().show()
})
Mbit_IR.onPressEvent(RemoteButton.TRight, function () {
    HelloBot.CarCtrl(HelloBot.CarState.Car_SpinRight)
})
Mbit_IR.onPressEvent(RemoteButton.Right, function () {
    HelloBot.CarCtrl(HelloBot.CarState.Car_Right)
    basic.pause(300)
    HelloBot.CarCtrl(HelloBot.CarState.Car_Stop)
})
Mbit_IR.onPressEvent(RemoteButton.NUM9, function () {
    HelloBot.RGB_Car_Program().showColor(neopixel.colors(NeoPixelColors.Violet))
    HelloBot.RGB_Car_Program().show()
})
Mbit_IR.onPressEvent(RemoteButton.NUM0, function () {
    music.ringTone(988)
    basic.pause(300)
    music.rest(music.beat(BeatFraction.Whole))
})
Mbit_IR.onPressEvent(RemoteButton.Up, function () {
    HelloBot.CarCtrl(HelloBot.CarState.Car_Run)
    basic.pause(300)
    HelloBot.CarCtrl(HelloBot.CarState.Car_Stop)
})
Mbit_IR.onPressEvent(RemoteButton.NUM7, function () {
    HelloBot.RGB_Car_Program().showColor(neopixel.colors(NeoPixelColors.Purple))
    HelloBot.RGB_Car_Program().show()
})
Mbit_IR.onPressEvent(RemoteButton.Minus, function () {
    HelloBot.Servo_Car(HelloBot.enServo.S1, 120)
    HelloBot.Servo_Car(HelloBot.enServo.S2, 60)
    basic.pause(1000)
})
Mbit_IR.onPressEvent(RemoteButton.Light, function () {
    HelloBot.RGB_Car_Program().showColor(neopixel.colors(NeoPixelColors.Green))
    HelloBot.RGB_Car_Program().show()
})
Mbit_IR.onPressEvent(RemoteButton.Left, function () {
    HelloBot.CarCtrl(HelloBot.CarState.Car_Left)
    basic.pause(300)
    HelloBot.CarCtrl(HelloBot.CarState.Car_Stop)
})
Mbit_IR.onPressEvent(RemoteButton.Down, function () {
    HelloBot.CarCtrl(HelloBot.CarState.Car_Back)
    basic.pause(300)
    HelloBot.CarCtrl(HelloBot.CarState.Car_Stop)
})
Mbit_IR.onPressEvent(RemoteButton.TLeft, function () {
    HelloBot.CarCtrl(HelloBot.CarState.Car_SpinLeft)
})
Mbit_IR.onPressEvent(RemoteButton.NUM3, function () {
    HelloBot.RGB_Line_Program().showColor(neopixel.colors(NeoPixelColors.Indigo))
    HelloBot.RGB_Line_Program().show()
})
Mbit_IR.onPressEvent(RemoteButton.NUM5, function () {
    HelloBot.RGB_Line_Program().showColor(neopixel.colors(NeoPixelColors.Red))
    HelloBot.RGB_Line_Program().show()
})
Mbit_IR.onPressEvent(RemoteButton.NUM2, function () {
    HelloBot.RGB_Line_Program().showColor(neopixel.colors(NeoPixelColors.Green))
    HelloBot.RGB_Line_Program().show()
})
Mbit_IR.onPressEvent(RemoteButton.BEEP, function () {
    HelloBot.CarCtrl(HelloBot.CarState.Car_Stop)
})
Mbit_IR.onPressEvent(RemoteButton.NUM1, function () {
    HelloBot.RGB_Line_Program().showColor(neopixel.colors(NeoPixelColors.White))
    HelloBot.RGB_Line_Program().show()
})
Mbit_IR.onPressEvent(RemoteButton.NUM6, function () {
    HelloBot.RGB_Car_Program().showColor(neopixel.colors(NeoPixelColors.Indigo))
    HelloBot.RGB_Car_Program().show()
})
Mbit_IR.onPressEvent(RemoteButton.Plus, function () {
    HelloBot.Servo_Car(HelloBot.enServo.S1, 45)
    HelloBot.Servo_Car(HelloBot.enServo.S2, 135)
    basic.pause(1000)
})
Mbit_IR.onPressEvent(RemoteButton.NUM4, function () {
    HelloBot.RGB_Car_Program().showColor(neopixel.colors(NeoPixelColors.Blue))
    HelloBot.RGB_Car_Program().show()
})
basic.showIcon(IconNames.Asleep)
basic.pause(100)
led.enable(false)
Mbit_IR.init(Pins.P8)
