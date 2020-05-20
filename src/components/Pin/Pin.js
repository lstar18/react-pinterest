import React from 'react';
import './Pin.scss';
import pinShape from '../../helpers/propz/pinShape';

class Pin extends React.Component {
  static propTypes = {
    pins: pinShape.pinShape,
  }

  render() {
    const { pin } = this.props;

    return (
      <div className="Pin col-3">
        <div class="card">
          <img src={pin.imageUrl} class="card-img-top" alt="pin" />
          <div class="card-body">
            <h5 class="card-title">{pin.title}</h5>
          </div>
        </div>
      </div>
    );
  }
}
export default Pin;
