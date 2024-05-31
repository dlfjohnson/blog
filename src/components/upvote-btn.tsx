"use client";

import React, { useState } from 'react'

export default function UpvoteBtn() {
  const [upvoteCount, setUpvoteCount] = useState();

  // const handleClick = () => {
  //   setUpvoteCount(prevState => prevState + 1)
  // };

  return (
      <button
        // onClick={handleClick}
        className="bg-blue-500 text-white p-2 mt-10"
      >
        Upvote
      </button>
  )
}
