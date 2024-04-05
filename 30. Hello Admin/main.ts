// array for usernames
const usernames: string[] = ['admin', 'Hina Naseer', 'Mahnoor Waris', 'Imran Khan', 'Sonia'];

// using forEach method
usernames.forEach(username => {
  // Step 3: Inside the loop, special greeting for 'admin', For Others Printing a Simple Greeting
  if (username.toLowerCase() === 'admin') {
    console.log('Hello admin, would you like to see a status report?');
  } else {
    console.log(`Hello ${username}, thank you for logging in again.`);
  }
});