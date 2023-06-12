
export const randomData: { value: Number, pos: Number }[] = [];

export function populateRandomData() {
    for (let i = 0; i < 100; i++) {
        randomData.push({ value: Math.random() * 101, pos: i });
    }
}
