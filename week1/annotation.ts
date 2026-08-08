let booktitle:string="Harry Potter";
let price:number=500;
let isWorth:boolean=true;
function  book(booktitle:string, year:number):string{
    return `${booktitle} was a super fictional book costs ${price}.`;
}
let cast:string[]=["Harry","Hermoine","Ron","voldmort","dumbledore"];
const s:string=book(booktitle,price);
console.log(s);
console.log(`Characters: ${cast.join(",")}`);
console.log(`is it worth? ${isWorth ? "Yes" : "No"}`);
