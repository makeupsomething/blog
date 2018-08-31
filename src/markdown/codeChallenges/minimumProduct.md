# Find the minimum product

## I try to get a better solution to a coding challenge I received during an interview

Given an array of integers find the minimum product that can be achieved with any pair of ints.

For example in the array [1, 1, 3, 7] the minimum would be `1 * 1 = 1` or [-3, -1, 2, 7, 4] the minimum would be `-3 * 4 = -12`

The array can be any length and contain both positive and negitive numbers.

I was actually asked this question in a coding test from a large well known company and was not able to achieve the optimal solution at the time. I think this time I have been able to get the best solution.

This solution is 0(n) as all it does it run through the array once.

This solution relies on the fact that there are only 3 configurations of the array

- array contains only positive numbers, so the smallest product is going to be the product of the two lowest numbers of the array

- array contains only negative numbers, so the smallest product is going to be the product of the two highest numbers in the array

- array contains both positive and negative numbers, so the smallest product will be the product of the largest negative number and the largest positive number.

```js
function findLowestProduct(a) {
  let maxNegitive
  let maxPostive
  let ctz1
  let ctz2

  a.forEach(n => {
    if(n > -1) {
      if(maxPostive === undefined || n >= maxPostive) {
        maxPostive = n
      } 
    } else {
      if(maxNegitive === undefined || n <= maxNegitive) {
        maxNegitive = n
      } 
    }

    if(ctz1 === undefined ||  Math.abs(n) <= Math.abs(ctz1) || ctz2 === undefined || Math.abs(n) <= Math.abs(ctz2)) {
      let tmp = ctz1
      ctz1 = n
      ctz2 = tmp
    }
  })

  if(maxNegitive && maxPostive) {
    console.log((maxNegitive*maxPostive))
  } else {
    console.log((ctz1*ctz2))
  }
}

findLowestProduct([-5, -1, 0, 3, 7, 9]);
findLowestProduct([8, 3, -1, 8, 5, -3, -7, 0, -5, 1, 7, -5, 4, 6, 1, 0]);
findLowestProduct([1, 1, 2, 3, 4, 5])
findLowestProduct([0, -2, -3, -4, -5])
```
