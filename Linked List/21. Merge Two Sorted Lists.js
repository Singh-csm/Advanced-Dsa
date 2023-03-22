
class ListNode{
    constructor(val,next){
        this.val = val;
        this.next =next;
    }
}

function mergeTwoLists(l1,l2){
    let node = new ListNode();
    let pointer =node;

    while(l1 && l2){
        if(l1.val <= l2.val){
            pointer.next=l1;
            l1 = l1.next;
        }else{
            pointer.next = l2;
            l2 = l2.next;
        }
        pointer = pointer.next;
    }
    if(l1){
        pointer.next =l1
    }
    if(l2){
        pointer.next =l2
    }
    return node.next
}