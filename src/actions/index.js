export const addTodo = (data) => {
  return {
    type: "ADDTODO",
    payload: { id: Math.random(), data: data },
  };
};

export const removeTodo = (id) => {
  return {
    type: "REMOVETODO",
    id,
  };
};
