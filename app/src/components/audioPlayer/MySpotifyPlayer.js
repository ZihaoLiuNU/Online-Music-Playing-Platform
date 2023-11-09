import React from 'react'
import SpotifyPlayer from "react-spotify-web-playback"

export default function MySpotifyPlayer({token, trackUri}) {
  if(!token) return null;
  // render the Spotify player component with the provided access token and track URI
  return (
    <SpotifyPlayer
    token={token}
    showSaveIcon
    uris={trackUri ? [trackUri] : []}
    />
  )
}
