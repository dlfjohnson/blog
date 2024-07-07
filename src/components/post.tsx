import React from 'react';
import moment from 'moment';
import { extractSpotifyTrackId } from '@/lib/utils';

const Post = ({ data }: { data: any}) => {
  const {
    genre,
    song,
    artist,
    spotifyLink,
    body,
    username,
    createdAt
  } = data;
  const spotifyTrackId = extractSpotifyTrackId(spotifyLink);

  return (
    <div className="flex py-3 px-5 rounded-lg bg-[#fafafa]">
      <div className="flex flex-col w-full gap-4">
        <div className="flex items-center justify-between gap-1">
          <h1 className="font-semibold text-left text-xl">{genre} | {song} - {artist}</h1>
          <h4 className="text-xs">Posted by <span className="font-bold">{username}</span> on&nbsp;{moment(createdAt).format("MMMM Do, YYYY")}
          </h4>
        </div>
        <div className="flexw-full">
          <div className="flex w-full justify-center">
            <iframe
              style={{borderRadius: '12px'}}
              src={`https://open.spotify.com/embed/track/${spotifyTrackId}?utm_source=generator`} width="100%"
              height="152"
              frameBorder="0"
              allowFullScreen
              allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy"
            ></iframe>
          </div>
          <div className="text-sm py-6">{body} {body}</div>
        </div>
      </div>
    </div>
  )
}

export default Post