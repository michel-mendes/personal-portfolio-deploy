export function randomValue(between: { min: number, max: number }): number {
    const { min, max } = between

    return Math.floor(Math.random() * (max - min + 1)) + min;
}