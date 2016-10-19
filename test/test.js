var R = require('ramda')
var test = require('tape').test
var is_permutation = require('../is_permutation.js')
var unique = require('ramda').uniq

const gaps = xs => R.not(is_permutation(xs))

test('gap function', function (t) {
    t.false(gaps([0,1,2]), '0,1,2 has no gaps')
    // duplicates are handled by ensuring only uniques are passed
    t.false(gaps(unique([0,1,1,2])), '0,1,1,2 has no gaps')
    t.false(gaps([1,2,0]), '1,2,0 has no gaps')
    t.false(gaps([]), 'empty set has no gaps')
    t.false(gaps([0]), 'singleton 0 set has no gaps')
    t.true(gaps([1]), '1 has a gap (no zero)')
    t.true(gaps([1,2,3]), '1 2 3 has a gap (no zero)')
    t.true(gaps([0,2,3]), '0 to 3 without 1 has a gap')
    t.end()
})
