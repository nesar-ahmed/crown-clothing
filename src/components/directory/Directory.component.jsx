import React from 'react';
import MenuItem from '../menu-item/MenuItem.component';

import './Directory.styles.scss';

class Directory extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      sections: [
        {
          id: '1',
          title: 'hats',
          imageUrl: '',
          linkUrl: 'hats',
        },
        {
          id: '2',
          title: 'jackets',
          imageUrl: '',
        },
        {
          id: '3',
          title: 'sneakers',
          imageUrl: '',
        },
        {
          id: '4',
          title: 'womens',
          size: 'large',
          imageUrl: '',
        },
        {
          id: '5',
          title: 'mens',
          size: 'large',
          imageUrl: 'https://i.ibb.co/R70vBrQ/men.png',
        },
      ]
    }
  }
  render() {
    return (
      <div className="directory-menu">
        { this.state.sections.map(({id, ...otherPropsSection}) => (
            <MenuItem key={id} {...otherPropsSection}/>
        ))}
      </div>
    )
  }
}

export default Directory;
