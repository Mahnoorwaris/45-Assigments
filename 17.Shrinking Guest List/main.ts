


let Guest_List :string[] = ['Imran Khan','Babar Azam','Iqrar Ul Hassan'];
// for(let i=0; i<Guest_List.length; i++){
//     console.log('Dear Mr. ' + Guest_List[i] + ',\n\nIt is our pleasure to invite you in our party.\n\nThank You!\n\n')
// }

let absent_Guest :string = 'Imran Khan' ;
let new_Guest :string = 'Feroz Kham' ;
Guest_List[0] = new_Guest ;

// for(let i=0; i<Guest_List.length; i++){
//     console.log('Dear Mr. ' + Guest_List[i] + ',\n\nIt is our pleasure to invite you in our party.\n\nThank You!\n\n')
// }

console.log(`Mr. ${absent_Guest} is not coming to the party.`);
console.log('Good News! We find Big Table So we are inviting 3 more guests.')

// Add 3 guests
Guest_List.unshift('Sir Zia Khan') ;
Guest_List.splice(2 , 0 , 'Hina Naseer');
Guest_List.push('Mahnoor Waris');


for(let i=0; i<Guest_List.length; i++){
    console.log('Dear Mr. ' + Guest_List[i] + ',\n\nIt is our pleasure to invite you in our party.\n\nThank You!\n\n')
}

// Sorry Message to guest for not inviting tp party
console.log('\nSorry we can not arrange big table, Only Two peoples will be invited.');

// Here I will Remove the Guests
while(Guest_List.length > 2){
   let remove_Guest = Guest_List.pop();
   console.log(`Sorry Mr. ${remove_Guest}, You are not invited for Dinner.`);
}

// our remaining 2 invited guest which are stilled invited
for(let i=0; i<Guest_List.length; i++){
    console.log('Dear Mr. ' + Guest_List[i] + ',\n\nYou are still invited.\n\nThank You!\n\n')
}

// Remove guests from the array
Guest_List.splice(0, 2);
console.log(Guest_List)