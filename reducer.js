export const languages = (state = { from: 'English', to: 'French' }, action) => {
  switch(action.type) {
    case 'SET_LANGUAGE': {
      return Object.assign({}, state, { [action.direction]: action.language });
    }
    default: return state;
  }
};

export const text = (state = '', action) => {
  switch(action.type) {
    case 'SET_TEXT': {
      return action.text;
    }
    default: return state;
  }
}

export default {
  languages,
  text
};
