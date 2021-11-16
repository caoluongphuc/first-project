const a = {
    key: 5,
    name: 'tien',
    rank:1,
}
const b = Object.assign({},a);
b.key = 10;
console.log(a)