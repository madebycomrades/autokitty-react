import proxyquire from 'proxyquire';
import React,{Component} from 'react/addons';

let {
  renderIntoDocument: render,
  findRenderedDOMComponentWithTag: byTag,
  findRenderedComponentWithType: byType
} = React.addons.TestUtils;

class LinkMock extends Component {
  render () {
    return <div>{this.props.children}</div>;
  }
}

class RouteHandlerMock extends Component {
  render () {
    return <div/>;
  }
}

let Chrome = proxyquire('./Chrome',{
  'react-router': {
    Link: LinkMock,
    RouteHandler: RouteHandlerMock
  }
});

describe('Chrome component',() => {

  let chrome;
  let flux = {};

  beforeEach(() => {
    chrome = render(<Chrome flux={flux}/>);
  });

  it('renders a heading',() => {
    let h1 = byTag(chrome,'h1');
    expect(h1.getDOMNode().textContent).toBe('AutoKitty');
  });

  it('renders a home link in the heading',() => {
    let h1 = byTag(chrome,'h1');
    let link = byType(h1,LinkMock);
    expect(link.props.to).toBe('home');
  });

  it('renders a sub-heading',() => {
    let h4 = byTag(chrome,'h4');
    expect(h4.getDOMNode().textContent).toBe('This kitty sorts out your complicated group expenses');
  });

  it('has a route handler with a flux prop',() => {
    let routeHandler = byType(chrome,RouteHandlerMock);
    expect(routeHandler.props.flux).toBe(flux);
  });
});
