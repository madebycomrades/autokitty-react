import db from '../db';
import projects from '../fixtures/projects';
import ProjectRecord from '../../public/records/ProjectRecord';

db.bulkDocs(projects.map(project => new ProjectRecord(project).toJS()))
  .then(() => console.log(`Added ${projects.length} project fixtures`))
  .catch(error => console.log(error));
