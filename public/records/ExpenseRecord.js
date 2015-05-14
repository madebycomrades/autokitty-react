import immutable from 'immutable';
import slug from 'to-slug-case';

let {Record,Set} = immutable;

let defaults = {
  title: undefined,
  value: undefined,
  slug: undefined,
  description: undefined,
  participants: undefined
};

export default class ExpenseRecord extends Record(defaults) {

  constructor (values) {

    if (!values.title) throw new Error('ExpenseRecord title is required');
    if (!values.value) throw new Error('ExpenseRecord value is required');

    values = Object.assign({},values);

    if (!values.slug) values.slug = slug(values.title);

    values.participants = new Set(values.participants || []);

    super(values);
  }
}
