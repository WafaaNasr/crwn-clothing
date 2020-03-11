
import sectionsData from './directory.data';

const INITIAL_STATE = {
  sections: sectionsData
};

export const directoryReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    default:
      return state;
  }
}