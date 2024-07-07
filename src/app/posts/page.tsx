import PostsList from '@/components/posts-list';
import React, { Suspense } from 'react';

export default async function Page() {
  return (
    <main className="text-center pt-16 px-5">
      <Suspense fallback="Loading...">
        <PostsList />
      </Suspense>
    </main>
  )
}
