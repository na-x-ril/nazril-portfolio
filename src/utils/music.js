// Fungsi untuk mendapatkan token akses Spotify
export const getSpotifyAccessToken = async () => {
    const clientId = "YOUR_SPOTIFY_CLIENT_ID";
    const clientSecret = "YOUR_SPOTIFY_CLIENT_SECRET";
    const response = await fetch("https://accounts.spotify.com/api/token", {
      method: "POST",
      headers: {
        "Content-Type": "application/x-www-form-urlencoded",
        Authorization: `Basic ${btoa(`${clientId}:${clientSecret}`)}`,
      },
      body: "grant_type=client_credentials",
    });
    const data = await response.json();
    return data.access_token;
  };
  
  // Fungsi untuk mencari lagu di Spotify
  export const searchMusicOnSpotify = async (query, accessToken) => {
    try {
      const response = await fetch(
        `https://api.spotify.com/v1/search?q=${encodeURIComponent(
          query
        )}&type=track&limit=1`,
        {
          headers: {
            Authorization: `Bearer ${accessToken}`,
          },
        }
      );
      const data = await response.json();
      if (data.tracks.items && data.tracks.items.length > 0) {
        const trackId = data.tracks.items[0].id;
        return `https://open.spotify.com/embed/track/${trackId}`;
      }
    } catch (error) {
      console.error("Error searching music on Spotify:", error);
    }
    return "";
  };
  
  // Fungsi untuk mencari video musik di YouTube
  export const searchMusicOnYouTube = async (query) => {
    const YOUTUBE_API_KEY = "AIzaSyCcl8FTgdS6JVXmPROyE-_nvZSfPb_FNqU";
    try {
      const response = await fetch(
        `https://www.googleapis.com/youtube/v3/search?part=snippet&maxResults=1&q=${encodeURIComponent(
          query + " official audio"
        )}&key=${YOUTUBE_API_KEY}`
      );
      const data = await response.json();
      if (data.items && data.items.length > 0) {
        const videoId = data.items[0].id.videoId;
        return `https://www.youtube.com/embed/${videoId}?autoplay=1`;
      }
    } catch (error) {
      console.error("Error searching music on YouTube:", error);
    }
    return "";
  };