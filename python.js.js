//leetcode python to javacript
// focuses or arrays and string
// functions
// reverse a string
function reverse(str){
    let strsize = str.length - 1;
    let count = 0;
    let newstr = "";
    while(count <= strsize){
        newstr += str[strsize];
        strsize -= 1;
    }
    return newstr;
}
// remove duplicate from array
function removeduplicate(nums){
    let current = 0;
    for( let i = 1; i < nums.length; i++){
        if (nums[i] !== nums[current]){
            current += 1
            nums[current] = nums[i]
        }
    }
    return current + 1;
}
// best time to buy and sell
function besttime(prices){
    let maxprofit = 0
    for(let i = 1; i <prices.length; i++ ){
        if(prices[i] > prices[i-1]){
            maxprofit += prices[i] - prices[i-1]
        }
    }
    return maxprofit
}

function rotateArray(nums, k){
    let last = nums.length - 1
    while( k !== 0){
        // inserting into javascript array
        nums.splice(0,0,nums[last])
        nums.pop()
        last = nums.length - 1
        k = k -1
    }
    return nums.toString()
}
// contains duplicates
function conduplicate(nums){
    if(nums.length === 0){
        return null
    }
    let contain = new Set();
    for (let i of nums){
        if(contain.has(i)){
            return true;
        }
        contain.add(i)
        
    }
    return false
}
// single number with map or dictionary python
function siglenum(nums){
    let single = {}
    for( let i of nums){
        if(i in single){
            single[i] += 1
        }
        else{
            single[i] = 1
        }
    }
    return single
}
// intersection of two arrays
function intersect(nums1, nums2){
    let inters = [];
    for(let i of nums1){
        if(nums2.includes(i)){
            inters.push(i);
            delete i
        }
        
    }
    return inters
}
let rev = reverse("eric")
let dup = removeduplicate([0,0,1,1,1,2,2,3,3,4])
let sell = besttime([7,1,5,3,6,4])
let sell2 = besttime([1,2,3,4,5])
let rotated = rotateArray([1,2,3,4,5,6,7],3)
let contains = conduplicate([1,2,3,1])
let sing = siglenum([2,2,1,4,4])
let intersct = intersect([4,9,5],[9,4,9,8,4])
console.log(intersct)