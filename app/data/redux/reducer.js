export const actionTypes = {
  ADD: 'ADD',
  REMOVE: 'REMOVE',
  REMOVE_COMPLETED: 'REMOVE_COMPLETED',
};

export const actionCreators = {
  add: item => ({ type: actionTypes.ADD, payload: item }),
  remove: item => ({ type: actionTypes.REMOVE, payload: item }),
  removeCompleted: () => ({ type: actionTypes.REMOVE_COMPLETED, payload: null }),
};

const initialState = { todos: [] };

function todosReducer(state = initialState.todos, action) {
  const { type, payload } = action;
  switch (type) {
    case actionTypes.ADD: {
      return [...state, { id: payload.id, text: payload.text, isCompleted: payload.isCompleted }];
    }
    case actionTypes.REMOVE: {
      return state.filter(item => item.id !== payload.id);
    }
    case actionTypes.REMOVE_COMPLETED: {
      return state.filter(item => !item.isCompleted);
    }
    default: {
      return state;
    }
  }
}

export default function reducer(state = initialState, action) {
  return {
    todos: todosReducer(state.todos, action),
  };
}