//  function for  make_album
function make_album(artist: string, title: string, tracks?: number) {
    const album: { artist: string, title: string, tracks?: number } = {
        artist: artist,
        title: title
    };
  
    // If tracks parameter is provided, add it to the album object
    if (tracks !== undefined) {
        album.tracks = tracks;
    }
  
    return album;
  }
  
  // Function call to create an album without specifying tracks
  const album1 = make_album('Ali Zafar', 'Psl (Khul ke Khel)');
  console.log(album1);
  
  // Function call to create an album with specifying tracks
  const album2 = make_album('Asim Azhar', 'Jo Tu Na Mila Mujhe', 12);
  console.log(album2);
  
  // Function call to create another album without specifying tracks
  const album3 = make_album('Aima Baig', 'Baazi');
  console.log(album3);