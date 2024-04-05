// Array of variable  magicians
const magicians: string[] = ["Hammad Janjua Rajput", "Hina Naseer", "Imran Khan", "Ahmed khan"];

function show_magicians(magicians: string[]): void {
    magicians.forEach(magician => {
        console.log(magician);
    });
}

show_magicians(magicians);