import React from 'react';

const SubMenu = (props) => {
  return (
    <ul className='vertical menu' data-drilldown children={props} />
  );
};

export default SubMenu;
