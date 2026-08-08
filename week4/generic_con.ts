function displayLength<T extends { length: number }>(value: T): void {
    console.log("Length:", value.length);
}

displayLength("TypeScript");
displayLength([10, 20, 30, 40]);