import PouchDB from 'pouchdb';
import fetch from 'isomorphic-fetch';
import memdown from 'memdown';
import projects from './fixtures/projects';
import upsert from 'pouchdb-upsert';

PouchDB.plugin(upsert);

const db = new PouchDB('autokitty',{db: memdown});
const {PORT} = process.env;

const designDoc = {
  views: {
    projects: {
      map: (doc => {
        if (doc.type === 'project') {
          emit(doc._id,doc);
        }
      }).toString()
    }
  }
};

db.upsert('_design/autokitty',() => designDoc)
  .catch(error => console.log(error));

var fixtures = projects.map(project => {
  return fetch(`http://localhost:${PORT}/api/project`,{
    method: 'post',
    body: JSON.stringify(project)
  });
});
Promise.all(fixtures)
  .catch(error => console.log(error));

export default db;
