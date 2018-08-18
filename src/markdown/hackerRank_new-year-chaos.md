At first glance this seems like it requires a sort. But lets try something different anyway.


```js
function minimumBribes(q) {
    console.log("--------")
    let bribes = 0
    for(let i = 0; i < q.length; i++) {
        if(q[i] > i+1 && Math.abs(q[i] - (i+1)) < 4) {
            console.log(i+1, q[i])
            console.log(Math.abs(q[i] - (i+1)))
            bribes+=Math.abs(q[i] - (i+1));
        } else if(Math.abs(q[i] - i+1) > 4) {
            bribes = "Too chaotic"
            break
        }
    }
    console.log(bribes)
    console.log("--------")
}
```

Nope, this works for the first test case but not the second. 

Lets try a bubble sort

```js
// Complete the minimumBribes function below.
function minimumBribes(q) {
    //console.log("-----------")
    let swapped = true;
    let swapCount = 0;
    while(swapped) {
        swapped = false
        for(let i = 1; i < q.length; i++) {
            //console.log(q[i-1], i, Math.abs(q[i-1] - i))
            if(Math.abs(q[i-1] - i) > 2) {
                swapCount = "Too chaotic";
                break;
            }
            if(q[i-1] > q[i]) {
                let tmp = q[i];
                q[i] = q[i-1];
                q[i-1] = tmp
                swapped = true;
                swapCount++;
            }
        }
    }
    console.log(swapCount)
    //console.log("-----------")
    
}
```

And...all the test cases pass. I was worried that it might be too slow for large sets, but I guess they do not check for that.