import db from '../db';
import projectsView from '../views/projects';

let designDoc = {
  views: {
    projects: projectsView
  }
};

db.upsert('_design/autokitty',() => designDoc)
  .then(doc => console.log(`Db design doc updated to ${doc.rev}`))
  .catch(error => console.log(error));
