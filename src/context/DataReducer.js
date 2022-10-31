const dataReducer = (state, action) => {
  switch (action.type) {
    default:
      return {
        ...state,
        skills: action.payload.skills,
      };
  }
};

export default dataReducer;
