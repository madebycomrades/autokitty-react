import React from 'react/addons';
import {jsdom} from 'jsdom';
import proxyquire from 'proxyquire';

let TestUtils = React.addons.TestUtils;

let routerMock = {
  Link: class Link extends React.Component {
    render () {
      return <a to={this.props.to}>{this.props.children}</a>;
    }
  },
  RouteHandler: class RouteHandler extends React.Component {
    render () {
      return <div flux={this.props.flux}/>;
    }
  }
};

let Chrome = proxyquire('./Chrome',{
  'react-router': routerMock
});

describe("Chrome",() => {

  let chrome;
  let flux = {};

  beforeEach(() => {
    global.document = jsdom('<html><head></head><body></div></body></html>');
    global.window = document.defaultView;
    chrome = TestUtils.renderIntoDocument(<Chrome flux={flux}/>);
  });

  it('should render a heading',() => {
    let h1 = TestUtils.findRenderedDOMComponentWithTag(chrome,'h1');
    expect(h1.getDOMNode().textContent).toBe('AutoKitty');
  });

  it('should render a home link in the heading',() => {
    let h1 = TestUtils.findRenderedDOMComponentWithTag(chrome,'h1');
    let a = TestUtils.findRenderedDOMComponentWithTag(h1,'a');
    expect(a.props.to).toBe('home');
  });

  it("should render a sub-heading",() => {
    let h4 = TestUtils.findRenderedDOMComponentWithTag(chrome,'h4');
    expect(h4.getDOMNode().textContent).toBe('This kitty sorts out your complicated group expenses');
  });

  it('should have a route handler with a flux prop',() => {
    let routeHandler = TestUtils.findRenderedComponentWithType(chrome,routerMock.RouteHandler);
    expect(routeHandler.props.flux).toBe(flux);
  });
});
