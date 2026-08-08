function display<T>(value: T): void {
    console.log("Value:", value);
}

display<number>(126);
display<string>("TypeScript");
display<boolean>(true);