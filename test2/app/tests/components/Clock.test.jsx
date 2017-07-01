var React = require('react');
var ReactDOM = require('react-dom');
var expect = require('expect');
var Clock = require('Clock');
var $ = require('jQuery');
var TestUtil = require('react-addons-test-utils');


describe('Clock', () => {

    it('Should exist', () => {
        expect(Clock).toExist();
    });

})

describe('render', () => {

    it('Should render clock output', () => {
        var clock = TestUtil.renderIntoDocument(<Clock totalSeconds={62} />);
        var $el = $(ReactDOM.findDOMNode(clock));
        expect($el.find('.clock-text').text()).toBe('01:02');
    });

})

