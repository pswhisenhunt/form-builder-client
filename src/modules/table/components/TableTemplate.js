import React from 'react';

export const TableTemplate = (props) => {
  console.log(props);
  return (
    <div>Table</div>
  );
};

TableTemplate.propTypes = {
  forms: React.PropTypes.array
};
