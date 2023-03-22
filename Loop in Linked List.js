
//has Cycle

class Node{
    constructor(val,next) {
        this.val = val;
        this.next =next;
    }
}

function hasCycle(head){
    if(!head) return false;
    let slow = head;
    let fast = head;

    while(fast && fast.next){
        slow =slow.next;
        fast =fast.next.next;
        if( fast == slow ) return true;
    }
    return false;
}