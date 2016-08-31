import React from 'react';

const ListTemplate = (props) => {
  return (
    <ul>
      {props.list.map((item) => {
        return (
          <li key={item._id} onClick={(event) => {
            event.preventDefault();
            props.handleSetActive(props.setActive, item);
          }}>
          {item.name || 'No Name'}
          </li>
        );
      })}
    </ul>
  );
};

ListTemplate.propTypes = {
  list: React.PropTypes.array,
  handleSetActive: React.PropTypes.func.isRequired,
  setActive: React.PropTypes.func
};

export default ListTemplate;
