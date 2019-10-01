let post = [
  {
    name: "john"
  },
  {
    name: "abigail"
  },
  {
    name: "strom"
  },
  {
    name: "hoki"
  }
]

let coba = post.filter(function(v) { return new RegExp('o', "i").test(v.name) })
let tesRegex = new RegExp('oke', 'i').test('okeke');
console.log(coba);