import {jsdom} from 'jsdom';

beforeEach(() => {
  // Even though testing with shallow rendering still need a document
  // global due to https://github.com/facebook/react/issues/4019
  global.document = jsdom('<html><head></head><body></body></html>');
  global.window = document.defaultView;
});
