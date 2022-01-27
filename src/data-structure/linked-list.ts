class Node {
  constructor(public element: string, public next: Node | null = null) {}
}

export class LinkedList {
  private head = new Node('head');

  /**
   * 查找值为value的Node
   *
   * @private
   * @param {string} value 指定节点值
   * @return {*}  {(Node - 找到指定节点 | undefined - 为找到指定节点)}
   * @memberof LinkedList
   */
  private find(value: string): Node | undefined {
    let currentNode: Node = this.head;
    let findNode: Node | undefined;

    while (currentNode.next) {
      if (currentNode.next.element === value) {
        findNode = currentNode.next;
        break;
      } else {
        currentNode = currentNode.next;
      }
    }

    return findNode;
  }

  /**
   * 获取指定节点的上一个节点
   *
   * @private
   * @param {string} value 指定节点值
   * @return {*}
   * @memberof LinkedList
   */
  private findPrevious(value: string): Node | undefined {
    let currentNode = this.head;
    let findNode: Node | undefined;

    while (currentNode.next) {
      if (currentNode.next.element === value) {
        findNode = currentNode;
        break;
      } else {
        currentNode = currentNode.next;
      }
    }

    return findNode;
  }

  getValueByIndex(index: number): string | undefined {
    let i = 1;
    let currentNode = this.head;
    let findNode: Node | undefined;
    const realIndex = index + 1;

    while (currentNode.next) {
      if (i === realIndex) {
        findNode = currentNode.next;
        break;
      } else {
        currentNode = currentNode.next;
        i++;
      }
    }

    return findNode?.element;
  }

  /**
   * 在value之后插入element Node
   *
   * @param {string} element 新增节点值
   * @param {string} value 指定节点值
   * @return {*}  {(Node - 新插入的节点 | undefined - 未找到指定节点)}
   * @memberof LinkedList
   */
  insert(element: string, value: string): Node | undefined {
    const newNode = new Node(element);
    const node = this.find(value);

    if (node) {
      newNode.next = node.next;
      node.next = newNode;
      return newNode;
    }

    return;
  }

  /**
   * 删除指定节点
   *
   * @param {string} value 指定被删除的节点的值
   * @return {*}  {(Node - 删除成功，返回被删除的上一个节点 | undefined - 删除失败，为找到指定节点)}
   * @memberof LinkedList
   */
  remove(value: string): Node | undefined {
    const prev = this.findPrevious(value);

    if (prev) {
      prev.next = prev.next!.next;
      return prev;
    }

    return;
  }

  /**
   * 找到链表的尾节点
   *
   * @private
   * @return {*}  {Node - 尾节点}
   * @memberof LinkedList
   */
  private findTail(): Node {
    let currentNode = this.head;

    while (currentNode.next) {
      currentNode = currentNode.next;
    }

    return currentNode;
  }

  /**
   * 在尾部追加节点
   *
   * @param {string} value 追加的节点值
   * @return {*}  {Node - 追加的节点值}
   * @memberof LinkedList
   */
  append(value: string): Node {
    const newNode = new Node(value);
    const tailNode = this.findTail();
    tailNode.next = newNode;
    return newNode;
  }

  /**
   * 反转列表
   *
   * @memberof LinkedList
   */
  reverse() {
    if (this.head.next) {
      const first = this.head.next;
      this.reverseNode(first);
      first.next = null;
    }
  }

  private reverseNode(node: Node) {
    if (node.next) {
      this.reverseNode(node.next);
      node.next.next = node;
    } else {
      this.head.next = node;
    }
  }
}
