Is a list of numbers a permutations of 0 ... n ?

This library knows the answer.

```js
const isPermutation = require('is-permutation')
isPermutation([1,2,0]) //=> true! 0,1,2 has no gaps
isPermutation([1,0,3]) //=> false! 0,1,3 has a gap, 2 is missing
```

Oh oh, this doesn't work

```
isPermutation([0,1,2,2]) //=> dont pass duplicate numbers!
```

(it basically compares the sum of the list entries to the sum of the
numbers 0, 1, 2, .. until the length of the list)


