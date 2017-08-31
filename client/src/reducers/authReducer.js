// Records whether a user is logged in or not
  // used to show user dashboard components etc using react router

export default function(state = {}, action) {
  console.log(action);
  switch(action.type) {
    default:
      return state;
  }
}
