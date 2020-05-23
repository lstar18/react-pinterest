import axios from 'axios';
import apiKeys from '../apiKeys.json';

const baseUrl = apiKeys.firebaseKeys.databaseURL;

const getPinsbyBoardId = (boardId) => new Promise((resolve, reject) => {
  axios.get(`${baseUrl}/pins.json?orderBy="boardId"&equalTo="${boardId}"`)
    .then((result) => {
      const allPinsObject = result.data;
      const pins = [];
      if (allPinsObject !== null) {
        Object.keys(allPinsObject).forEach((bId) => {
          const newPin = allPinsObject[bId];
          newPin.id = bId;
          pins.push(newPin);
        });
      }
      resolve(pins);
    })
    .catch((err) => reject(err));
});

const deletePin = (pinId) => axios.delete(`${baseUrl}/pins/${pinId}.json`);

export default { getPinsbyBoardId, deletePin };
