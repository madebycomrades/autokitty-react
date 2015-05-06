import {Record,List} from 'immutable';

let ProjectRecord = Record({
  type: 'project',
  createdAt: null,
  updatedAt: null,
  members: null
});

export default function (doc={}) {
  let now = new Date().toISOString();
  doc.createdAt = doc.createdAt ? now : doc.createdAt;
  doc.updatedAt = doc.updatedAt ? now : doc.updatedAt;
  // doc.members = new List(doc.members);
  return new ProjectRecord(doc);
}
