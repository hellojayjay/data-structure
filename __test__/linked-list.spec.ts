import { LinkedList } from '../src/data-structure/linked-list';

function getLinkedListValues(linkedList: LinkedList) {
  let i = 0;
  const values: string[] = [];

  while (true) {
    const value = linkedList.getValueByIndex(i);

    if (value === undefined) {
      break;
    } else {
      values.push(value);
      i++;
    }
  }

  return values;
}

describe('linked-list', () => {
  let linkedList: LinkedList;

  beforeEach(() => {
    linkedList = new LinkedList();
  });

  describe('init', () => {
    it('链表初始化时，值为 []', () => {
      const values = getLinkedListValues(linkedList);
      const expected: string[] = [];

      expect(values).toEqual(expected);
    });
  });

  describe('append', () => {
    it('追加节点 a，则链表值为 ["a"]', () => {
      linkedList.append('a');

      const values = getLinkedListValues(linkedList);
      const expected: string[] = ['a'];

      expect(values).toEqual(expected);
    });

    it('追加节点 a, b，则链表值为 ["a", "b"]', () => {
      linkedList.append('a');
      linkedList.append('b');

      const values = getLinkedListValues(linkedList);
      const expected: string[] = ['a', 'b'];

      expect(values).toEqual(expected);
    });
  });

  describe('insert', () => {
    it('先追加节点 a，再在a后插入节点 b，则链表值为 ["a", "b"]', () => {
      linkedList.append('a');
      linkedList.insert('b', 'a');

      const values = getLinkedListValues(linkedList);
      const expected: string[] = ['a', 'b'];
      expect(values).toEqual(expected);
    });

    it('追加节点 a, b，再在a后插入c，则链表值为 ["a", "c", "b"]', () => {
      linkedList.append('a');
      linkedList.append('b');
      linkedList.insert('c', 'a');

      const values = getLinkedListValues(linkedList);
      const expected: string[] = ['a', 'c', 'b'];
      expect(values).toEqual(expected);
    });

    it('先追加节点 a，但想在不存在的c节点后插入b，则插入失败，链表值为 ["a"]', () => {
      linkedList.append('a');
      linkedList.insert('b', 'c');

      const values = getLinkedListValues(linkedList);
      const expected: string[] = ['a'];
      expect(values).toEqual(expected);
    });
  });

  describe('remove', () => {
    it('先追加节点 a,b，再删除a，则链表值为 ["b"]', () => {
      linkedList.append('a');
      linkedList.append('b');
      linkedList.remove('a');

      const values = getLinkedListValues(linkedList);
      const expected: string[] = ['b'];
      expect(values).toEqual(expected);
    });

    it('先追加节点 a,b，再删除b，则链表值为 ["a"]', () => {
      linkedList.append('a');
      linkedList.append('b');
      linkedList.remove('b');

      const values = getLinkedListValues(linkedList);
      const expected: string[] = ['a'];
      expect(values).toEqual(expected);
    });

    it('先追加节点 a,b，再删除不存在的节点c，则删除失败，链表值为 ["a", "b"]', () => {
      linkedList.append('a');
      linkedList.append('b');
      linkedList.remove('c');

      const values = getLinkedListValues(linkedList);
      const expected: string[] = ['a', 'b'];
      expect(values).toEqual(expected);
    });
  });
});
