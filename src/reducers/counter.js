const initialState = {
  countValue: 0,
};

const INCREMENT = 'INCREMENT';

export default (state=initialState, action) => {
    switch(action.type){
        case INCREMENT:
            return {
                ...state,
                countValue: state.countValue + 1
            };
        default:
            return state;
    }
};

//Action
export const increment = () => {
    return (dispatch) => {
        dispatch({
            type: INCREMENT
        });
    };
};