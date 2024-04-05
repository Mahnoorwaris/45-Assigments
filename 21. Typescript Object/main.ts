

// Making Objects for Political parties
class politicalParties {
    chairman: string;
    voters: string;
    Performance: string;
  
    constructor(Name: string, popularity: string, Performance: string) {
      this.chairman = Name;
      this.voters= popularity;
      this.Performance = Performance;
    }
  }
  //make intances of politicalparties
  const PTI = new politicalParties ("Our Hero ( 'IMRAN KHAN ' )", "100 % ", " 100 %% ");
  const PMLN = new politicalParties(" Nawaz Sharif", " 0 % %", " 10 %");
  const PPP = new politicalParties("Bilawal bhutto", "0  %", " 5 %");
  
  // Print information about the politicalparties
  console.log(PTI);
  console.log(PMLN);
  console.log(PPP);
  