import React from 'react';
import PropTypes from 'prop-types';
import './ItemPage.css';

const ItemPage = ({ items }) => {
  return (
    <div className="item-page-items">
      {items.map((item) => {
        return (
          <li key={item.id} className="item-page-item">
            {item.name}
          </li>
        );
      })}
    </div>
  );
};

ItemPage.propTypes = {
  items: PropTypes.array.isRequired
};
export default ItemPage;
