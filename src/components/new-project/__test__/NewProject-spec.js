import NewProject from '../NewProject';
import React from 'react/addons';
import {renderShallowTree} from '../../../../src/utils/testUtils';

describe('NewProject',() => {

  let addProject;
  var output;
  var renderer;

  beforeEach(() => {
    addProject = jasmine.createSpy('addProject');
    ({output,renderer} = renderShallowTree(<NewProject addProject={addProject}/>));
  });

  it('renders one form', () => {
    const forms = output.props.children.filter(child => child.type === 'form');
    expect(forms.length).toBe(1);
  });

  it('renders one text input', () => {
    const form = output.props.children.find(child => child.type === 'form');
    const textInputs = form.props.children.filter(child => child.props.type === 'text');
    expect(textInputs.length).toBe(1);
  });

  it('renders one submit button', () => {
    const form = output.props.children.find(child => child.type === 'form');
    const submitInputs = form.props.children.filter(child => child.props.type === 'submit');
    expect(submitInputs.length).toBe(1);
  });

  it('it calls the addProject function with a project title', () => {
    const form = output.props.children.find(child => child.type === 'form');
    const textInput = form.props.children.find(child => child.props.type === 'text');
    textInput.props.onChange({target: {value: 'foo'}});
    form.props.onSubmit({preventDefault: () => {}});
    expect(addProject).toHaveBeenCalledWith('foo');
  });
});
