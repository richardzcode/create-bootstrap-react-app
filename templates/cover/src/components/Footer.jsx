import React, { Component } from 'react';
import { BFooter } from 'bootstrap-4-react';

export default class Footer extends Component {
  render() {
    return (
      <BFooter mt="auto" className="cover-footer">
        <p>
          Cover template for <a href="https://getbootstrap.com/">Bootstrap</a>, by <a href="https://twitter.com/mdo">@mdo</a>.
        </p>
      </BFooter>
    )
  }
}
