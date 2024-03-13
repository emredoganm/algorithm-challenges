export class ListNode {
  val: number;
  next: ListNode | null;

  constructor(val: number = 0, next: ListNode | null = null) {
    this.val = val;
    this.next = next;
  }
}

export default function removeZeroSumSublists(head: ListNode | null): ListNode | null {
  let startingNode = head;
  let headToReturn = head;

  while (startingNode) {
    let endingNode = startingNode.next;
    let runningSum = startingNode.val;

    while (endingNode) {
      runningSum += endingNode.val;

      if (runningSum === 0) {
        if (headToReturn === startingNode) {
          headToReturn = endingNode.next;
        } else {
          let current: ListNode | null = headToReturn;

          while (current) {
            if (current.next === startingNode) {
              current.next = endingNode.next;
              break;
            }

            current = current.next;
          }
        }
      }

      endingNode = endingNode.next;
    }

    startingNode = startingNode.next;
  }

  return headToReturn;
}
