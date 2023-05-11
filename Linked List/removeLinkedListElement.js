/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} val
 * @return {ListNode}
 */
var removeElements = function(head, val) {
    
    if(head==null){
        return null
    }

    let dummyNode = new ListNode()
    dummyNode.next = head
    head= dummyNode

    while( dummyNode.next !== null){
        if(dummyNode.next.val==val){
            dummyNode.next= dummyNode.next.next
        }
        else{
            dummyNode= dummyNode.next
        }
    }

    return head.next
};
