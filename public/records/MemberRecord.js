import immutable from 'immutable';
import slug from 'to-slug-case';
import ExpenseRecord from './ExpenseRecord';

let {Record,List} = immutable;

let defaults = {
  name: undefined,
  slug: undefined,
  expenses: undefined
};

export default class MemberRecord extends Record(defaults) {

  constructor (values) {

    if (!values.name) throw new Error('MemberRecord name is required');

    values = Object.assign({},values);

    if (!values.slug) values.slug = slug(values.name);

    values.expenses = new List((values.expenses || []).map(expense => new ExpenseRecord(expense)));

    super(values);
  }
}
