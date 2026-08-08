let f: any = 10;
f = "Hello"; 
f=true;
console.log(f);
let data: unknown = 42;
if (typeof data === "number") {
    let result = data + 10;
    console.log(result)
}

function logNoti(message : string): void{
    console.log("ALERT:" +message);
}
logNoti("Completed");