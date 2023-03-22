

class ListNode{
    constructor(val,next){
        this.val = val;
        this.next = next;
    }
}

let head = [1,2,3,4,5], k = 2;

function rotateRight(head, k){
    if(!head) return null;
    let len =1;
    let cur = head;
    while(cur.next){
        cur = cur.next;
        len++;
    }
    k=k%len;
    if(k === 0) return head
    let node = head;
    for(let i=0; i<len-k-1;i++){
        node = node.next;
    }

    let rotated = node.next;
    node.next = null;
    cur.next = head;
    return rotated
}
