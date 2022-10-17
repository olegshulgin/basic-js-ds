const { NotImplementedError } = require('../extensions/index.js');

// const { ListNode } = require('../extensions/list-node.js');

/**
 * Implement the Queue with a given interface via linked list (use ListNode extension above).
 *
 * @example
 * const queue = new Queue();
 *
 * queue.enqueue(1); // adds the element to the queue
 * queue.enqueue(3); // adds the element to the queue
 * queue.dequeue(); // returns the top element from queue and deletes it, returns 1
 * queue.getUnderlyingList() // returns { value: 3, next: null }
 */

class Stack {
  push(el) {
    this[Object.keys(this).length] = el;
    return this;
  }

  pop() {
    const last = this[Object.keys(this).length - 1];
    delete this[Object.keys(this).length - 1];
    return last;
  }

  peek() {
    return this[Object.keys(this).length - 1];
  }
}

module.exports = {
  Queue
};
