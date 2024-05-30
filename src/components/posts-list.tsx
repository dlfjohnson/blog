import React from 'react';
import Link from 'next/link';

type Post = {
  id: string,
  title: string,
};

export default async function PostsList() {
  await new Promise((resolve) => setTimeout(resolve, 1500));
  const response = await fetch('https://dummyjson.com/posts?limit=10');
  const data = await response.json();

  return (
    <ul>
      {data.posts.map((post: Post) => (
        <li key={post.id} className="mb-3">
          <Link href={`/posts/${post.id}`}>{post.title}</Link>
        </li>
      ))}
    </ul>
  )
}
