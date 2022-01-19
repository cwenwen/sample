class Node {
  constructor(data) {
    this.data = data;
    this.next = null;
  }
}

class Stack {
  constructor(head = null) {
    this.head = head;
    this.length = 0;
  }

  push(data) {
    const node = new Node(data);

    if (!this.head) {
      this.head = node;
    } else {
      let tail = this.head;
      while (tail.next !== null) {
        tail = tail.next;
      }
      tail.next = node;
    }
    this.length++;
  }

  pop() {
    if (!this.head) return undefined;
    let oldTail = this.head;
    let newTail = oldTail;

    while (oldTail.next) {
      newTail = oldTail;
      oldTail = oldTail.next;
    }

    newTail.next = null;
    this.length--;

    if (this.length === 0) {
      this.head = null;
    }

    return oldTail;
  }

  size() {
    return this.length;
  }
}
