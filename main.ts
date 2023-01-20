let a = 0
basic.forever(function () {
    a = Tinybit.Ultrasonic_Car()
    if (a > 0 && a <= 4) {
        Tinybit.RGB_Car_Big2(255, 0, 0)
    } else if (a > 4 && a <= 8) {
        Tinybit.RGB_Car_Big2(200, 0, 0)
    } else if (a > 8 && a <= 12) {
        Tinybit.RGB_Car_Big2(150, 0, 0)
    } else if (a > 12 && a <= 16) {
        Tinybit.RGB_Car_Big2(100, 0, 0)
    } else if (a > 16 && a <= 20) {
        Tinybit.RGB_Car_Big2(50, 0, 0)
    } else if (a > 20) {
        Tinybit.RGB_Car_Big2(0, 0, 0)
    }
})
