import React, { useRef, useEffect } from "react";

type Props = {
  onClickAway?: Function,
  children: React.ReactElement,
};

const useClickAwayHandler = (ref, onClickAway) => {
  useEffect(() => {
    function handleClickOutside(event) {
      if (ref.current && !ref.current.contains(event.target)) {
        onClickAway();
      }
    }

    // Bind the event listener
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      // Unbind the event listener on clean up
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [ref]);
};

const ClickAwayListener = (props: Props) => {
  const { onClickAway } = props;
  const wrapperRef = useRef(null);
  useClickAwayHandler(wrapperRef, onClickAway);

  return <div ref={wrapperRef}>{props.children}</div>;
};

ClickAwayListener.defaultProps = {
  onClickAway: () => {},
};

export default ClickAwayListener;
