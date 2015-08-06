/* global emit */
/* eslint no-extra-parens:0 */

export default {
  _id: '_design/projects',
  language: 'javascript',
  views: {
    by_id: {
      map: (function (doc) {
        if (doc.type === 'project') {
          emit(doc._id, null)
        }
      }).toString()
    }
  }
}
