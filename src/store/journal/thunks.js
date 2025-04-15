export const startNewNote = () => {
  return async (dispatch) => {
    //Uid
    const newNote = {
      title: '',
      body: '',
      date: new Date().getTime(),
    };
  };
};
