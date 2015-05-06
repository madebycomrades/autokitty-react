import upsert from 'pouchdb-upsert';
import PouchDB from 'pouchdb';

PouchDB.plugin(upsert);

const {DB} = process.env;

console.log(`Using db at ${DB}`);

export default new PouchDB(DB);
