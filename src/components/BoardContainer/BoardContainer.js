import React from 'react';
import PropTypes from 'prop-types';
import boardsData from '../../helpers/data/boardsData';
import authData from '../../helpers/data/authData';
import smash from '../../helpers/data/smash';
import Board from '../Board/Board';
import BoardForm from '../BoardForm/BoardForm';
import './BoardContainer.scss';

class BoardContainer extends React.Component {
  static propTypes = {
    setSingleBoard: PropTypes.func.isRequired,
  }

  state = {
    boards: [],
    formOpen: false,
  }

  getAllBoards = () => {
    boardsData.getBoardsbyUid(authData.getUid())
      .then((boards) => this.setState({ boards }))
      .catch((err) => console.error('unable to get all boards', err));
  }

  componentDidMount() {
    this.getAllBoards();
  }

  removeBoard = (boardId) => {
    smash.completelyRemoveBoard(boardId)
      .then(() => this.getAllBoards())
      .catch((err) => console.error('cannot remove board', err));
  };

  saveNewBoard = (newBoard) => {
    boardsData.saveBoard(newBoard)
      .then(() => {
        this.getAllBoards();
        this.setState({ formOpen: false });
      })
      .catch((err) => console.error('unable to add board', err));
  }

  render() {
    const { boards, formOpen } = this.state;
    const { setSingleBoard } = this.props;
    const makeBoards = boards.map((board) => <Board key={board.id} board={board} setSingleBoard={setSingleBoard} removeBoard={this.removeBoard} />);
    return (
      <div className="BoardContainer">
        <h2> Boards </h2>
        <button className="btn btn-warning mb-2" onClick={() => this.setState({ formOpen: true })}> <i className="fas fa-plus"></i> </button>
        {formOpen ? <BoardForm saveNewBoard={this.saveNewBoard}/> : '' }
        <div className="d-flex flex-wrap">
          { makeBoards }
        </div>
      </div>
    );
  }
}

export default BoardContainer;
