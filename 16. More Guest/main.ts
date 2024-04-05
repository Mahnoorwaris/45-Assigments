


let  Guest_list :string[] = ['Imran Khan','Babar Azam','Iqrar Ul Hassan'];

//for(let i=0; i<Guest_list.length; i++){

   // console.log('Dear Mr. ' + Guest_list[i] + ',\n\nIt is out pleasure to invite you in our party.\n\nThank You!\n\n');
//}

let absent_Guest :string = 'Imran Khan';

let new_Guest :string = 'Feroz Kham';

Guest_list[0] = new_Guest;

for(let i=0; i<Guest_list.length; i++){

    console.log('Dear Mr. ' + Guest_list[i] + ',\n\nIt is out pleasure to invite you in our party.\n\nThank You!\n\n');
}

console.log(`Mr. ${absent_Guest} is not coming to the party.`)