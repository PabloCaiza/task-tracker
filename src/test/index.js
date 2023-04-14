"use strict";
let sales = 20;
let course = 'TypeScript';
let is_publishes = true;
function render(document) {
    console.log(document);
}
let numbers = [1, 2, 3, 4];
numbers.forEach(value => console.log(value));
var Size;
(function (Size) {
    Size[Size["Small"] = 0] = "Small";
    Size[Size["Medium"] = 1] = "Medium";
    Size[Size["Large"] = 2] = "Large";
})(Size || (Size = {}));
let size = Size.Large;
console.log("********");
console.log(size);
const calculateTax = (income, taxYear = 2023) => {
};
const hello = (label) => {
    console.log(label);
};
hello({ label: "" });
calculateTax(1, 10);
console.log(calculateTax(10, 10));
let employee = { id: 1, name: "pablo" };
