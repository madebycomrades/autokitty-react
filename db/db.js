import upsert from 'pouchdb-upsert';
import PouchDB from 'pouchdb';
import leveldown from 'leveldown';

PouchDB.plugin(upsert);

const {DB,NODE_ENV} = process.env;

let options = NODE_ENV === 'development' ? {db: leveldown} : {};

console.log(`Using db at ${DB}`);

export default new PouchDB(DB,options);
