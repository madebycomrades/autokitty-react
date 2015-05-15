import path from 'path';
import Jasmine from 'jasmine';
import SpecReporter from 'jasmine-spec-reporter';

let noop = () => {};
let jasmine = new Jasmine({projectBaseDir: path.resolve()});

jasmine.configureDefaultReporter({print: noop});
jasmine.addReporter(new SpecReporter());
jasmine.loadConfigFile('jasmine.json');
jasmine.execute();
