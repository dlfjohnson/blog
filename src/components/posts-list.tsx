import React from 'react';
import prisma from '@/lib/db';
import Post from '@/components/post';

export default async function PostsList() {
  const posts = await prisma.post.findMany({
    orderBy: {
      id: 'desc',
  },
  })

  return (
    <ul className="flex flex-col gap-3">
      {posts.map((post) => (
        <Post
          key={post.id}
          data={post}
        />
      ))}
    </ul>
  )
}
