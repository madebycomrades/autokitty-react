import fetch from 'isomorphic-fetch'
import memdown from 'memdown'
import PouchDB from 'pouchdb'
import projects from './fixtures/projects'
import projectsDesignDoc from './design/projects'
import upsert from 'pouchdb-upsert'

PouchDB.plugin(upsert)

const db = new PouchDB('autokitty', {db: memdown})
export default db

// The rest of this code adds a design document and fixtures and will probably
// only be used for the dev/test envs. A different approach will be used when
// in production and dealing with a remote database

db.put(projectsDesignDoc)
  .catch(console.error)

const {PORT} = process.env
const fixtures = projects.map(project => {
  return fetch(`http://localhost:${PORT}/api/project`, {
    method: 'post',
    body: JSON.stringify(project)
  })
})

Promise.all(fixtures)
  .catch(console.error)
