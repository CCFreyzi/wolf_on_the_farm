export const EGG_IMAGES = ["color_logo_35", "color_logo_34"];

export const EGG_POSITION_KEYS = {
    q: 81,
    a: 65,
    e: 69,
    d: 68
};
export const EGG_POSITIONS = [
    {top: 144, left: -10, poss: EGG_POSITION_KEYS.q, isTop: true, corner: 29, isRight: false, backgroundIndex: 1},
    {top: 286, left: -10, poss: EGG_POSITION_KEYS.a, isTop: false, corner: 24, isRight: false, backgroundIndex: 2},
    {top: 72, left: 980, poss: EGG_POSITION_KEYS.e, isTop: true, corner: 150, isRight: true, backgroundIndex: 3},
    {top: 216, left: 980, poss: EGG_POSITION_KEYS.d, isTop: false, corner: 156, isRight: true, backgroundIndex: 4},
];

export const getLevelConfig = level => {
    if (level > 80) {
        return {speed: 650, frequency: 400}
    } else if (level > 50) {
        return {speed: 1000, frequency: 600}
    } else if (level > 25) {
        return {speed: 1500, frequency: 900}
    } else if (level > 12) {
        return {speed: 2000, frequency: 1300}
    }
    return {speed: 3000, frequency: 2000}
};