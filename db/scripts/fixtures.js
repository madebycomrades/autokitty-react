import db from '../db';
import projects from '../fixtures/projects';

db.bulkDocs(projects)
  .then(doc => console.log(`Added ${projects.length} project fixtures`))
  .catch(error => console.log(error));
