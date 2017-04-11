var LinkedList = function() {
  var list = {};
  list.head = null;
  list.tail = null;

  list.addToTail = function(val) {
    var _newTail = Node(value);

    if(!list.head) {
      // when list.head === null => set the head to newTail
      list.head = _newTail;
    }

    if(list.tail) {
      // when list tail !== null
      list.tail.next = _newTail;
    }

    list.tail = _newTail;

  };

  list.removeHead = function() {

  };
  list.contains = function(target) {

  };

  return list;

};

var Node = function(value) {
  var node = {};

  node.value = value;
  node.next = null;

  return node;
};
