const initialState = {
  list: [],
};
const todoReducer = (state = initialState, action) => {
  switch (action.type) {
    case "ADDTODO":
      const { id, data } = action.payload;
      return {
        ...state,
        list: [
          ...state.list,
          {
            id: id,
            data: data,
          },
        ],
      };
    case "REMOVETODO":
      const newlist = state.list.filter((elem) => elem.id !== action.id);
      return {
        ...state,
        list: newlist,
      };
    default:
      return state;
  }
};
export default todoReducer;
