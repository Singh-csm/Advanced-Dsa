
class ListNode{
    constructor(val,next){
        this.val =val;
        this.next =next;
    }
}

let arr = [1,2,3,4,5,6,7].reduceRight((next,val)=>new ListNode(val,next),null);

console.log(arr)