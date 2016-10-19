var R = require('ramda')

const nonNeg = R.any(R.flip(R.lt)(0))

// if given a list of unique numbers, it will check if it is a permutation
module.exports = function isPermutation (xs) {
  if (nonNeg(xs)) {
    throw Error('Cannot call `gaps()` on a list containing negative numbers')
  }
  const n = R.length(xs) - 1

  // base case empty set has no gaps
  if (n === -1) {
    return true
  }

  // t = the sum 0 ... n
  // if (s == t) the the list of nrs is consecutive
  const s = R.sum(xs)
  const t = n * (n + 1) / 2
  return Math.abs(s - t) <= 0.1
}
