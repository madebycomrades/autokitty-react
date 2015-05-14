import {jsdom} from 'jsdom';

beforeEach(() => {
  global.document = jsdom('<html><head></head><body></body></html>');
  global.window = document.defaultView;
});
