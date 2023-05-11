/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var addTwoNumbers = function(l1, l2) {
    
    let firstNumber = ""
    while(l1){
        firstNumber += l1.val
        l1 = l1.next
    }

    firstNumber = firstNumber.split('').reverse().join('')
    firstNumber = BigInt(firstNumber)

    let secondNumber = ""
    while(l2){
        secondNumber += l2.val
        l2 = l2.next
    }

    secondNumber = secondNumber.split('').reverse().join('')
    secondNumber = BigInt(secondNumber)

    let sum = firstNumber + secondNumber
    sum = String(sum)
    sum = sum.split('').reverse()
    sum = sum.reduceRight((next, val) =>new ListNode(val,next), null)

    return sum
};
