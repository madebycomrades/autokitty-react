import proxyquire from 'proxyquire';
import React from 'react';
import RouterMock from '../../../jasmine-helpers/mocks/react-router';

let Chrome = proxyquire('./Chrome',{
  'react-router': RouterMock
});

describe('Chrome',() => {

  let chrome;
  let flux = {};

  beforeEach(() => {
    chrome = renderIntoDocument(<Chrome flux={flux}/>);
  });

  it('should render a heading',() => {
    let h1 = findRenderedDOMComponentWithTag(chrome,'h1');
    expect(h1.getDOMNode().textContent).toBe('AutoKitty');
  });

  it('should render a home link in the heading',() => {
    let h1 = findRenderedDOMComponentWithTag(chrome,'h1');
    let link = findRenderedComponentWithType(h1,RouterMock.Link);
    expect(link.props.to).toBe('home');
  });

  it('should render a sub-heading',() => {
    let h4 = findRenderedDOMComponentWithTag(chrome,'h4');
    expect(h4.getDOMNode().textContent).toBe('This kitty sorts out your complicated group expenses');
  });

  it('should have a route handler with a flux prop',() => {
    let routeHandler = findRenderedComponentWithType(chrome,RouterMock.RouteHandler);
    expect(routeHandler.props.flux).toBe(flux);
  });
});
