import {
    calculateTotal,
    average,
    percentage,
    getGrade
} from "./export_fun.js";

const total = calculateTotal(90, 85, 95);
const avg = average(total, 3);
const per = percentage(total, 300);

console.log("Total:", total);
console.log("Average:", avg);
console.log("Percentage:", per);
console.log("Grade:", getGrade(per));