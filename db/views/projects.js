export default {
  map: (doc => {
    if (doc.type === 'project') {
      emit(doc._id,doc);
    }
  }).toString()
};
