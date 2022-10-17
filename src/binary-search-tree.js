const { NotImplementedError } = require('../extensions/index.js');

// const { Node } = require('../extensions/list-tree.js');

/**
* Implement simple binary search tree according to task description
* using Node from extensions
*/
class BinarySearchTree {
  constructor() {
    this.treeRoot = null;
  }

  root() {
    return this.treeRoot;
  }

  add(data) {
    this.treeRoot = addNode(this.treeRoot, data);
    function addNode(node, data) {
      if (!node) {
        return {
          data: data,
          left: null,
          right: null
        };
      }
      if (node.data === data) {
        return node;
      } 
      if (node.data > data) {
        node.left = addNode(node.left, data);
      } else {
        node.right = addNode(node.right, data);
      }
      return node;
    }
  }

  has(data) {
    return hasNode(this.treeRoot, data);
    function hasNode(node, data) {
      if (!node) {
        return false;
      }
      if (node.data === data) {
        return true;
      }
      if (node.data > data) {
        return hasNode(node.left, data);
      } else {
        return hasNode(node.right, data);
      }
    }
  }

  find(data) {
    return findNode(this.treeRoot, data);
    function findNode(node, data) {
      if (!node) {
        return null;
      }
      if (node.data === data) {
        return node;
      }
      if (node.data > data) {
        return findNode(node.left, data);
      } else {
        return findNode(node.right, data);
      }
    }
  }

  remove(data) {
    this.treeRoot = removeNode(this.treeRoot, data);
    function removeNode(node, data) {
      if (!node) {
        return null;
      }
      if (data > node.data) {
        node.right = removeNode(node.right, data);
        return node;
      } else if (data < node.data) {
        node.left = removeNode(node.left, data);
        return node;
      } else {
        if (!node.right && !node.left) {
          return null;
        }
        if (!node.right) {
          node = node.left;
          return node
        }
        if (!node.left) {
          node = node.right;
          return node;
        }
        let minDataRight = node.right;
        while (minDataRight.left) {
          minDataRight = minDataRight.left;
        }
        node.data = minDataRight.data;
        node.right = removeNode(node.right, minDataRight.data);
        return node;
      }
    }
  }

  min() {
    return findMin(this.treeRoot);
    function findMin(node) {
      if (!node) {
        return null;
      }
      if (!node.left) {
        return node.data;
      }
      return findMin(node.left);
    }
  }

  max() {
    return findMax(this.treeRoot);
    function findMax(node) {
      if (!node) {
        return null;
      }
      if (!node.right) {
        return node.data;
      }
      return findMax(node.right);
    }
  }
}

module.exports = {
  BinarySearchTree
};
