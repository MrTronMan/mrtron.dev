//Title Animation
const titleTag = document.getElementById("titleTag");
const statusTag = document.getElementById("status");
setTimeout(() => {
    titleTag.classList.add('color-change'); 
    titleTag.classList.remove('fadeIn'); 
}, 2000);
//Triggers
const observer = new IntersectionObserver(entries => {
    // Loop over the entries
    entries.forEach(entry => {
      // If the element is visible
      if (entry.isIntersecting) {
        // Add the animation class
        entry.target.classList.add('about-animation');
      }
    });
  });
  
  observer.observe(document.querySelector('.about-header'));

//Lanyard // Spotify Status & Discord Status

function gS() {
	$.getJSON("https://api.lanyard.rest/v1/users/355295268716937227", data => {
		data = data.data;
		if (data.discord_status == "online") {
      if (data.active_on_discord_mobile) {
        statusTag.classList.remove('dnd');
        statusTag.classList.remove('idle');
        statusTag.classList.remove('offline');
        statusTag.classList.remove('online');
        statusTag.classList.remove('ping');
        statusTag.classList.add('ping-mobile');
        document.getElementById('text-status').innerHTML = "i am currently on mobile!"; 
      } else {
			statusTag.classList.remove('ping-mobile');
      statusTag.classList.remove('dnd');
      statusTag.classList.remove('idle');
      statusTag.classList.remove('offline');
      statusTag.classList.add('ping');
      statusTag.classList.add('online');
      document.getElementById('text-status').innerHTML = "i am currently online!"; 
		}}
    if (data.discord_status == "offline") {
			statusTag.classList.remove('ping-mobile');
      statusTag.classList.remove('online');
      statusTag.classList.remove('idle');
      statusTag.classList.remove('dnd');
      statusTag.classList.add('ping');
      statusTag.classList.add('offline');
      document.getElementById('text-status').innerHTML = "i am currently offline!";  
		}
    if (data.discord_status == "dnd") {
			statusTag.classList.remove('ping-mobile');
      statusTag.classList.remove('online');
      statusTag.classList.remove('idle');
      statusTag.classList.remove('offline');
      statusTag.classList.add('ping');
      statusTag.classList.add('dnd');
      document.getElementById('text-status').innerHTML = "i am currently on dnd!";  
		}
    if (data.discord_status == "idle") {
			statusTag.classList.remove('ping-mobile');
      statusTag.classList.remove('online');
      statusTag.classList.remove('dnd');
      statusTag.classList.remove('offline');
      statusTag.classList.add('ping');
      statusTag.classList.add('idle');
      document.getElementById('text-status').innerHTML = "i am currently away!";  
		}
    if(!data.listening_to_spotify) {
      document.getElementById('spotify').innerHTML = "i am not currently listenin' to anything!";
      document.getElementById('spotify-track').href = "#";
    }
    else {
      var spotifyData = `${data.spotify.song}` + " - " + `${data.spotify.artist}`
      if(spotifyData.length > 40) spotifyData = spotifyData.substring(0, 40) + '...';
      document.getElementById('spotify').innerHTML = spotifyData
      document.getElementById('spotify-track').href = "spotify:track:" + `${data.spotify.track_id}`;
    }
	});
}

gS();

setInterval(gS, 5000);
