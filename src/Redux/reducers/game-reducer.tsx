const SOMETHING = "SOMETHING";

let initialState = {};

const gameReducer = (state = initialState, action: any) => {
  switch (action.type) {
    case SOMETHING: {
      return { ...state };
    }

    default:
      return state;
  }
};

//Action Creators

export const something = () => ({
  type: SOMETHING,
});

export default gameReducer;
