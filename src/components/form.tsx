'use client';

import React, { useRef } from 'react';
import { createPost } from "@/actions/actions";
import toast from 'react-hot-toast';

export default function Form() {
  const formRef = useRef<HTMLFormElement>(null);

  return (
    <form
      ref={formRef}
      action={async formData => {
        const { error } = await createPost(formData);

        if (error) {
          toast.error(error);
          return;
        }

        toast.success(
          'Post saved!',
          {
            duration: 4000
          }
        );

        if (formRef.current) {
          formRef.current.reset();
        }
      }}
      className="flex flex-col max-w-[400px] mx-auto gap-2 my-10"
    >
      <input
        type="text"
        name="title"
        placeholder="Title for new post"
        className="border rounded px-3 h-10"
        required
      />
      <textarea
        name="body"
        placeholder="Body content for new post"
        className="border rounded px-3 py-2"
        rows={6}
        required
      />
      <button className="h-10 bg-blue-500 px-5 rounded text-white">Submit</button>
    </form>
  )
}
