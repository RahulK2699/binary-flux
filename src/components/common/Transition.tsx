import React from 'react';
import { CSSTransition } from 'react-transition-group';

type TransitionProps = {
  show: boolean;
  unmountOnExit: boolean;
  timeout: number | any,
  className: string;
  children: JSX.Element | Array<JSX.Element> | string | null;
  onEnter: Function,
  onEntered: Function,
  onEntering: Function,
  onExit: Function,
  onExiting: Function,
  onExited: Function
}

const Transition = (props: TransitionProps) => {

  const { 
    show, 
    timeout,
    unmountOnExit, 
    className, 
    children,
    onEnter,
    onEntered,
    onEntering,
    onExit,
    onExiting,
    onExited
  } = props;

  const conditionalProps: any = {};
  if(onEnter) conditionalProps.onEnter = onEnter;
  if(onEntered) conditionalProps.onEntered = onEntered;
  if(onEntering) conditionalProps.onEntering = onEntering;
  if(onExit) conditionalProps.onExit = onExit;
  if(onExiting) conditionalProps.onExiting = onExiting;
  if(onExited) conditionalProps.onExited = onExited;

  return (
    <CSSTransition
      in={show}
      timeout={timeout}
      classNames={className}
      unmountOnExit={unmountOnExit}
      { ...conditionalProps }
    >
      {
        children
      }
    </CSSTransition>
  )
}

Transition.defaultProps = {
  show: false,
  timeout: 300,
  unmountOnExit: true,
  className: '',
  onEnter: null,
  onEntered: null,
  onEntering: null,
  onExit: null,
  onExiting: null,
  onExited: null
}

export default Transition;