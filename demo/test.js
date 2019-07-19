const cars = [
    { model: 'renault', year: 1956 },
    { model: 'peugeot', year: 1968 },
    { model: 'ford', year: 1977 }
  ];


let obj = {
    name: 111,
    age: 222
}
obj.__proto__.aa = 123;

for( let a of Object.keys(obj)){
    console.log(a)
}
