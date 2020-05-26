import React from 'react';
import './BoardForm.scss';
import PropTypes from 'prop-types';
import authData from '../../helpers/data/authData';

class BoardForm extends React.Component {
  static propTypes = {
    saveNewBoard: PropTypes.func.isRequired,
  }

  state = {
    boardName: '',
    boardDescription: '',
  }

  nameChange = (e) => {
    e.preventDefault();
    this.setState({ boardName: e.target.value });
  }

  descriptionChange = (e) => {
    e.preventDefault();
    this.setState({ boardDescription: e.target.value });
  }

  saveBoard = (e) => {
    e.preventDefault();
    const { boardDescription, boardName } = this.state;
    const { saveNewBoard } = this.props;
    const newBoard = {
      description: boardDescription,
      name: boardName,
      uid: authData.getUid(),
    };
    saveNewBoard(newBoard);
    console.error('newBoard', newBoard);
  }

  render() {
    const { boardDescription, boardName } = this.state;
    return (
       <div className="BoardForm">
         <form className="col-6 offset-3">
          <div className="form-group">
            <label htmlFor="board-name"> Name </label>
            <input
            type="text"
            className="form-control"
            id="board-name"
            placeholder="Jim"
            value={boardName}
            onChange={this.nameChange} />
          </div>
          <div className="form-group">
            <label htmlFor="board-description">Description</label>
            <input
            type="text"
            className="form-control"
            id="board-description"
            placeholder="awesome description here"
            value={boardDescription}
            onChange={this.descriptionChange} />
          </div>
          <button type="submit" className="btn btn-dark mb-2" onClick={this.saveBoard}>Save Board </button>
        </form>
       </div>
    );
  }
}
export default BoardForm;
