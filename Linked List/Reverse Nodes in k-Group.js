/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} k
 * @return {ListNode}
 */
var reverseKGroup = function(head, k) {
    
   let current = head;
   let counter =0;
 
   while(current != null && counter < k){
       current = current.next;
       counter ++;
   }


   if(counter == k){
       current = reverseKGroup(current, k);


       // k times direction change
       while(counter-- > 0){ //k times
           let temp = head.next;  
           head.next = current;
           current = head;
           head = temp;
       }
       head = current;
   }
   return head;
};
