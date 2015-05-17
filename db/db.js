import upsert from 'pouchdb-upsert';
import PouchDB from 'pouchdb';
import leveldown from 'leveldown';

PouchDB.plugin(upsert);

const {DB} = process.env;

let options = {};
let type;

if (DB.startsWith('http')) {
  type = 'remote';
} else {
  Object.assign(options,{db: leveldown});
  type = 'local';
}

console.log(`Using ${type} DB at ${DB}`);

export default new PouchDB(DB,options);
