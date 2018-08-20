This seems similar to the [previous]('./hackerRank_new-year-chaos.md') challenge. So my first instince is to try a bubble sort again. I think I will run into some problems with this approach, but lets see.

```js
    //console.log("-----------")
    let swapped = true;
    let swapCount = 0;
    while(swapped) {
        swapped = false
        for(let i = 1; i < arr.length; i++) {
            if(arr[i-1] > arr[i]) {
                let tmp = arr[i];
                arr[i] = arr[i-1];
                arr[i-1] = tmp
                swapped = true;
                swapCount++;
            }
        }
    }
    console.log(swapCount)
    return swapCount
    //console.log("-----------")
```

Yes, yes. If I had of read the question correctly of course I would have known that this is not the correct way to do it.

Lets try something else

```js
function minimumSwaps(arr) {
    //console.log("-----------")
    let swapped = true;
    let swapCount = 0;
    //while(swapped) {
        //swapped = false
        for(let i = 1; i < arr.length; i++) {
            let swapNum = arr.indexOf(i)
            let tmp = arr[swapNum];
            arr[swapNum] = arr[i-1];
            arr[i-1] = tmp
            swapCount++
        }
    //}
    console.log(swapCount)
    return swapCount
    //console.log("-----------")
}
```

Ok...time to research the correct approach for this kind of problem.