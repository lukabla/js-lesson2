const numberArrays = [2, 4, 6, 8, 10, 12];
const lastNumber = numberArrays.pop();
numberArrays.unshift(lastNumber);

console.log(numberArrays);

const product = [
  {
    productTitle: `Apple`,
    productPrice: 5,
  },
  {
    productTitle: `Banana`,
    productPrice: 8,
  },
  {
    productTitle: `Graip`,
    productPrice: 6,
  },
];
console.log(product);
console.log(typeof product);

const num = [20, 40, 60, 80, 100];
const sum = num[0] + num[1] + num[2] + num[3] + num[4];
const average = sum / num.length;
console.log(num);
console.log(average);

const phone = {
  phoneName: `iphone 13`,
  phoneDescription: `Smartphone`,
  phonePrice: 2100,
  shopAddresses: [
    `Street Exaple N23`,
    `Street exaple2 N35`,
    `Street example3 N128`,
  ],
  phoneMemoryInGB: 128,
};

console.log(phone);
console.log(
  `Phone name is  ${phone.phoneName},  phone price is ${phone.phonePrice} and you can buy it at ${phone.shopAddresses[0]}. `
);
