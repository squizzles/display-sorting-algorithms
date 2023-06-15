export function generateRandomArray(size: number): number[] {
    const data: number[] = [];
    for (let i = 0; i < size; i++) {
        data.push( Math.random() * 100 );
    }
    return data;
}