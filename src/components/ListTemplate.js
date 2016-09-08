import React from 'react';

const ListTemplate = (props) => {
  return (
    <ul>
      <li onClick={(event) => {
        event.preventDefault()
        props.handleSetActive(props.setActive);
      }}>
        <i className="fa fa-plus-circle fa-lg add" aria-hidden="true"></i>
        New Form
      </li>
      {props.list.map((item) => {
        if (props.activeId && props.activeId === item._id) {
          return (
            <li key={item._id} onClick={(event) => {
              event.preventDefault();
              props.handleSetActive(props.setActive, item);
            }}>
            <span onClick={(event) => {event.preventDefault(); props.handleAddControl(props.addControl, item)}}>
              <i className="fa fa-arrow-circle-o-left fa-lg arrow" aria-hidden="true"></i>
              {item.name || 'No Name'}
            </span>
            </li>
          );
        } else {
          return (
            <li key={item._id} onClick={(event) => {
              event.preventDefault();
              props.handleSetActive(props.setActive, item);
            }}>
            {item.name || 'No Name'}
            </li>
          );
        }
      })}
    </ul>
  );
};

ListTemplate.propTypes = {
  list: React.PropTypes.array,
  handleSetActive: React.PropTypes.func.isRequired,
  setActive: React.PropTypes.func,
  activeId: React.PropTypes.string
};

export default ListTemplate;
