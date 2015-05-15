import path from 'path';
import Jasmine from 'jasmine';
import SpecReporter from 'jasmine-spec-reporter';

let jasmine = new Jasmine({projectBaseDir: path.resolve()});
jasmine.configureDefaultReporter({print: ()=>{}});
jasmine.addReporter(new SpecReporter());
jasmine.projectBaseDir = path.resolve();
jasmine.specDir = '';
jasmine.loadConfigFile('jasmine.json');
jasmine.execute();
