//  Kelvin temp
const kelvin = 293;

// the forumula for kelvin to celcius
const celsius =  kelvin - 273;

// the forumlua to convert celsius to fahrenheit and round down
const fahrenheit = Math.floor(celsius * (9/5) + 32);

console.log(`the temperature is ${fahrenheit} degrees Fahrenheit`)

// formula to convert celsius to newton
const newton = Math.floor(celsius * (33/100));

console.log(`the temperature is ${newton} degrees newton`);
