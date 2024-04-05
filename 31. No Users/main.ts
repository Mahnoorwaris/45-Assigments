// Array for usernames
let usernames: string[] = ['admin', 'Hina Naseer', 'Mahnoor Waris', 'Imran Khan', 'Sonia'];

// Checking User Availiblity 
if (usernames.length === 0) {
  console.log("We need to find some users!");
} else {
  // Removimg all usernames from the array
  usernames = [];
  console.log("All usernames have been removed. " + usernames.length);
}