# Hello, again


```js
function hourglassSum(arr) {
    let curTop = 0
    let curMiddle = curTop+1
    let curBottom = curTop+2
    let currentMax = 0
    while(curBottom < arr.length) {
        for(let i = 1; i < arr[curTop].length-1; i++) {
            let topSection = arr[curTop][i-1] + arr[curTop][i] + arr[curTop][i+1]
            let middleSection = arr[curMiddle][i]
            let bottomSection = arr[curBottom][i-1] + arr[curBottom][i] + arr[curBottom][i+1]
            let m = topSection + middleSection + bottomSection
            currentMax = Math.max(currentMax, m)
        }
        curTop++
        curMiddle++
        curBottom++
    }
    console.log(currentMax)
    return currentMax
}
```

My first attempt passed all the test cases but 1 (test 3). 

After checking out the failed case it looked like there were two problems. If I got `NaN` as a result of the sum then `NaN` would become the `currentMax` value. Also in the case that all the sum values were less then 0 then my initial `currentMax` would not get overwritten.

Here is the code for my second attempt

```js
function hourglassSum(arr) {
    let curTop = 0
    let curMiddle = curTop+1
    let curBottom = curTop+2
    let currentMax = Number.MIN_SAFE_INTEGER - 1;
    while(curBottom < arr.length) {
        for(let i = 1; i < arr[curTop].length-1; i++) {
            let topSection = arr[curTop][i-1] + arr[curTop][i] + arr[curTop][i+1]
            let middleSection = arr[curMiddle][i]
            let bottomSection = arr[curBottom][i-1] + arr[curBottom][i] + arr[curBottom][i+1]
            let m = topSection + middleSection + bottomSection
            if(m) {
                currentMax = Math.max(currentMax, m)
            }
        }
        curTop++
        curMiddle++
        curBottom++
    }
    
    return currentMax
}
```

On no! Now I fail test case too.

Silly me, I am checking if `m` exists, but if `m` is `0` then this is interpreted as `false`.

Finally I pass all the cases with this solution

```js
function hourglassSum(arr) {
    let curTop = 0
    let curMiddle = curTop+1
    let curBottom = curTop+2
    let currentMax = Number.MIN_SAFE_INTEGER - 1;
    while(curBottom < arr.length) {
        for(let i = 1; i < arr[curTop].length-1; i++) {
            let topSection = arr[curTop][i-1] + arr[curTop][i] + arr[curTop][i+1]
            let middleSection = arr[curMiddle][i]
            let bottomSection = arr[curBottom][i-1] + arr[curBottom][i] + arr[curBottom][i+1]
            let m = topSection + middleSection + bottomSection
            if(m || m === 0) {
                currentMax = Math.max(currentMax, m)
            }
        }
        curTop++
        curMiddle++
        curBottom++
    }
    
    return currentMax
}
```