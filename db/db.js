import upsert from 'pouchdb-upsert';
import PouchDB from 'pouchdb';
import memdown from 'memdown';
import projects from './fixtures/projects';
import ProjectRecord from '../public/records/ProjectRecord';

PouchDB.plugin(upsert);

const db = new PouchDB('autokitty',{db:memdown});

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

db.bulkDocs(projects.map(project => new ProjectRecord(project).toJS()))
  .catch(error => console.log(error));

export default db;
