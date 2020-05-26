import { createSlice } from '@reduxjs/toolkit';

export const conditionsSlice = createSlice({
  name: 'data',
  initialState: {
    conditions: null,
    isFetching: false,
    error: null,
  },
  reducers: {
    request: state => {
      state.conditions = null;
      state.isFetching = true;
      state.error = null;
    },
    success: (state, json) => {
      state.conditions = json.payload;
      state.isFetching = false;
      state.error = null;
    },
    failed: (state, error) => {
      state.conditions = null;
      state.isFetching = false;
      state.error = error.payload.message;
     
    },

  }
});

export const { request, success, failed } = conditionsSlice.actions;

export const loadConditions = () => dispatch => {
  dispatch(request())
  fetch("http://localhost:4000/conditions")
    .then(response => response.json())
    .then(json => dispatch(success(json)))
    .catch(error => dispatch(failed(error)));
};

export const selectConditions = state => state.data;

export default conditionsSlice.reducer;
