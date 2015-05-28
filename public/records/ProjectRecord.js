import {Record,List} from 'immutable';
import slug from 'to-slug-case';
import shortid from 'shortid';
import MemberRecord from './MemberRecord';

let defaults = {
  _id: undefined,
  _rev: undefined,
  type: 'project',
  title: undefined,
  members: undefined,
  createdAt: undefined,
  updatedAt: undefined
};

export default class ProjectRecord extends Record(defaults) {

  constructor (values) {
    let now = new Date().toJSON();
    super({
      title: values.title,
      _id: values._id || (values.title && slug(`${values.title} ${shortid.generate()}`)),
      createdAt: values.createdAt || now,
      updatedAt: values.updatedAt || now,
      members: new List((values.members || []).map(member => new MemberRecord(member)))
    });
  }
}
