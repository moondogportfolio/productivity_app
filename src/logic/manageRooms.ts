import {
  getDatabase,
  push,
  update,
  child,
  get,
  ref,
  remove,
} from '@firebase/database';

export async function enterChannel(channelId = 'discord') {
  const db = getDatabase();
  const chatRef = ref(db, `channels/${channelId}/messages`);
  const chatList = await get(chatRef).then((snapshot) => {
    return snapshot.val();
  });
  return { chatRef, chatList };
}
