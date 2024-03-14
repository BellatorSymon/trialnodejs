

const _ = require('lodash')

const arraySus = [1,[2,[3,[4,[5,[6,[7]]]]]]]
const arrayClean = _.flattenDeep(arraySus)

console.log(arraySus)
console.log(arrayClean);