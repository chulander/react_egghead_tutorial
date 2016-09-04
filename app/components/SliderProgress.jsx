"use strict";
import React, {Component}from 'react';
import ReactDOM from 'react-dom';

import {Progress} from 're-bulma';


class SliderProgress extends React.Component {
  constructor (props){
    super(props);
    // console.log('sliderProgress props', props)
    this.state = {
      percent: props.percent
    }
  }

  // componentWillReceiveProps(nextProps){
  //  console.log("should recieve props", nextProps)
  // }
  // shouldComponentUpdate (nextProps, nextState){
  //   console.log('sliderprogress shouldupdate')
  //   return true
  // }
  componentDidMount(){
    console.log('SliderProgress.componentDidMount', this)
    // ReactDOM.findDOMNode(this).setAttribute('value', this.state.percent * 100)
    this.props.updateSliderProgressDimensions(this);
  }
  shouldComponentUpdate (nextProps, nextState){
    // console.log('SliderProgress.shouldComponentUpdate nextProps', nextProps);
    // console.log('SliderProgress.shouldComponentUpdate this.props', this.props);
    // console.log('SliderProgress.shouldComponentUpdate nextState', nextState);
    // console.log('SliderProgress.shouldComponentUpdate this.state', this.state);
    const test=(
      nextProps.percent !== this.state.percent
    )
    // console.log('SliderProgress.shouldComponentUpdate', test);
    return test;
  }
  componentWillReceiveProps(nextProps) {
    // console.log('SliderProgress.componentWillReceiveProps nextProps', nextProps)
    this.setState(nextProps)
    ReactDOM.findDOMNode(this).setAttribute('value', nextProps.percent * 100);
  }
  componentDidUpdate (prevProps, prevState){
    // console.log('SliderProgress.componentDidUpdate prevProps', prevProps);
    // console.log('SliderProgress.componentDidUpdate this.props', this.props);
    // console.log('SliderProgress.componentDidUpdate prevState', prevState);
    // console.log('SliderProgress.componentDidUpdate this.state', this.state);
  }

  render (){
    return (
        <Progress color="isPrimary" size="isLarge"  max="100" style={{marginBottom: '5px'}} />


    )
  }
}


export default SliderProgress;