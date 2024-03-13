import removeZeroSumSublists, { ListNode } from ".";

describe("Remove Zero Sum Sublists", () => {
  it("should work for example#1", () => {
    const result = removeZeroSumSublists(createLinkedList([1, 2, -3, 3, 1]));
    expect(deserialize(result)).toStrictEqual([3, 1]);
  });

  it("should work for example#2", () => {
    const result = removeZeroSumSublists(createLinkedList([1, 2, 3, -3, 4]));
    expect(deserialize(result)).toStrictEqual([1, 2, 4]);
  });

  it("should work for example#3", () => {
    const result = removeZeroSumSublists(createLinkedList([1, 2, 3, -3, -2]));
    expect(deserialize(result)).toStrictEqual([1]);
  });

  it("should work for example#4", () => {
    const result = removeZeroSumSublists(createLinkedList([4, 40, -45, 1, 2, 4, 40, -40, 32]));
    expect(deserialize(result)).toStrictEqual([2, 4, 32]);
  });

  it("should work for list without zero sum sublist", () => {
    const result = removeZeroSumSublists(createLinkedList([1, 2, 3, 4]));
    expect(deserialize(result)).toStrictEqual([1, 2, 3, 4]);
  });

  it("should remove full list and return null", () => {
    const result = removeZeroSumSublists(createLinkedList([1, 2, -3]));
    expect(deserialize(result)).toStrictEqual(null);
  });
});

const createLinkedList = (values: number[]): ListNode => {
  const list = values.map((value) => new ListNode(value));

  list.forEach((node, index) => {
    node.next = list[index + 1] || null;
  });

  return list[0]; // returning the head of the linked list
};

const deserialize = (head: ListNode | null): number[] | null => {
  if (head === null) return null;

  let current: ListNode | null = head;
  const result: number[] = [];

  while (current) {
    result.push(current.val);
    current = current.next;
  }

  return result;
};
