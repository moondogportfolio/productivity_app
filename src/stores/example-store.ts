import { defineStore } from 'pinia';
import { onValue, DataSnapshot } from '@firebase/database';
import { initFirestoreDb } from 'src/logic/firebase';
import { enterChannel } from 'src/logic/manageRooms';
import { storeToRefs } from 'pinia';
import { realRows, realColumns } from './data';
import { ColumnType, FieldType } from './types';

interface Store {
  counter: number;
  messages: any;
  realColumns: ColumnType[];
  realRows: any;
}

export const useCounterStore = defineStore('counter', {
  state: () =>
    ({
      name: 'store1',
      counter: 0,
      counter2: 123,
      messages: {
        1: 'b',
        2: 'a',
        3: `After more than two years in design and development, Symphony 2.0 is
        ready for our customers to try. The rollout begins with an open beta for
        select customers beginning July 20, followed by a general availability
        release later this summer. Customers can look forward to a completely
        revamped look and feel with exciting new features. Here are just a few
        of the reasons to switch to Symphony 2.0:`,
      },
      realColumns,
      realRows,
    } as Store),
  getters: {
    doubleCount: (state) => state.counter * 2,
  },
  actions: {
    createRow() {
      const newObj: any = {};
      realColumns.forEach((ele) => {
        newObj[ele.field] = { value: 1 };
      });
      newObj['name'].value = 'New Row';
      this.realRows.push(newObj);
    },
    createColumn(type: FieldType) {
      const newCol: ColumnType = {
        name: 'new',
        label: 'New Column',
        field: 'new',
        type: type,
      };
      console.log(newCol);
      this.realColumns.push(newCol);
    },
    update(snapshot: DataSnapshot) {
      this.messages = snapshot.val();
    },
  },
});

export const CounterStore = useCounterStore();
export const { messages } = storeToRefs(CounterStore);

// initFirestoreDb();
// const { chatRef, chatList } = await enterChannel();
// CounterStore.messages = chatList;
// onValue(chatRef, CounterStore.update);
