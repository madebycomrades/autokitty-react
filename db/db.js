/*global emit*/

import PouchDB from 'pouchdb';
import fetch from 'isomorphic-fetch';
import memdown from 'memdown';
import projects from './fixtures/projects';
import upsert from 'pouchdb-upsert';

PouchDB.plugin(upsert);

const db = new PouchDB('autokitty', {db: memdown});
export default db;

const {PORT} = process.env;
const emit = () => {}; // Find out why eslint isn't registering emit as a global below
const designDoc = {
  views: {
    projects: {
      map: (function (doc) {
        if (doc.type === 'project') {
          emit(doc._id, doc);
        }
      }).toString()
    }
  }
};

db.upsert('_design/autokitty', () => designDoc).catch(console.error);

var fixtures = projects.map(project => {
  return fetch(`http://localhost:${PORT}/api/project`, {
    method: 'post',
    body: JSON.stringify(project)
  });
});

Promise.all(fixtures).catch(console.error);
