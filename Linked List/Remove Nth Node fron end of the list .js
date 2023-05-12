/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} n
 * @return {ListNode}
 */
var removeNthFromEnd = function(head, n) {

 let node1 = newListNode()
 node1.next = head

 let prev = node1
 let curr = node1

 for(let i=0;i<n;i++){
     prev = prev.next
 }

 while(prev.next){
     curr = curr.next
     prev = prev .next
 }
 curr.next = curr.next.next
 return node1.next


      
};
