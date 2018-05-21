import React from 'react';

const Option = (props) => {
  return (
    <div>
      {props.optionText}
      { props.optionText && (
        <button
          onClick={(e) => {
            props.handleDeleteOption(props.optionText);
          }}
        >
          Delete
        </button>
      )}
    </div>
  );
};

export default Option;
