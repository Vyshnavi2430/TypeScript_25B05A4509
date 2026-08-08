let str: string = "Helloworld";
let freq: { [key: string]: number } = {};

for (let ch of str) {
    if (freq[ch]) {
        freq[ch]++;
    } else {
        freq[ch] = 1;
    }
}

for (let key in freq) {
    console.log(key + " : " + freq[key]);
}