namespace MovieBooking {
    export function ticketPrice(tickets: number,price: number): number {
        return tickets * price;
    }
    export function calculateDiscount(total: number,discount: number): number {
        return total* discount/ 100;
    }
    export function final(total: number,discount: number): number {
        return total - discount;
    }
}

// Using the namespace
let total = MovieBooking.ticketPrice(3, 200);
let discount = MovieBooking.calculateDiscount(total, 10);
let finalPrice = MovieBooking.final(total, discount);

console.log("Ticket Amount:", total);
console.log("Discount:", discount);
console.log("Final Amount:", finalPrice);