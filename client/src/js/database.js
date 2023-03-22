import { openDB } from 'idb';

const initdb = async () =>
  openDB('jate', 1, {
    upgrade(db) {
      if (db.objectStoreNames.contains('jate')) {
        console.log('jate database already exists');
        return;
      }
      db.createObjectStore('jate', { keyPath: 'id', autoIncrement: true });
      console.log('jate database created');
    },
  });

// TODO: Add logic to a method that accepts some content and adds it to the database
export const putDb = async (content) => {

const jateDb = await openDB('jate', 1);
jateDb.transaction('jate', 'readwrite')
  .objectStore('jate')
  .add([{content}]);
  
const result = await jateDb;

console.log(result, ' was saved to openDB')
}



// TODO: Add logic for a method that gets all the content from the database
export const getDb = async () => {

  const jateDb = await openDB('jate', 1);
  jateDb.transaction('jate', 'readonly')
    .objectStore('jate')
    .getAll();
    
  const result = await jateDb;
  
  console.log('result from DB ', result);
  }
  
initdb();
