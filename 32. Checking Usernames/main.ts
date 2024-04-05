// current_users array
let current_users: string[] = ['Mahnoor Waris', 'Hina Naseer', 'Imran Khan', 'Naveed Ahmed', 'Shahbaz Saleem'];

// new_users array
let new_users: string[] = ['Bilal','Hina Naseer','Imran Khan','Jameel','Hamza'];

new_users.forEach(newUsername => {
  let LowerCase: string = newUsername.toLowerCase();

  
  // Checking username already exists in current_users or not
  if (current_users.map(user => user.toLowerCase()).includes(LowerCase)) {
      // Username already exists
    console.log(`The username '${newUsername}' is not available. Please choose a different username.`);
  } else {
      // Username is available
      console.log(`The username '${newUsername}' is available.`);
  }
})