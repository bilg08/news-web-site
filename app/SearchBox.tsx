'use client'

import { useRouter } from "next/navigation";
import { FormEvent, useState } from "react";

function SearchBox() {
    const [input, setInput] = useState('');
    const router = useRouter()
    function handleSearch(e:FormEvent<HTMLFormElement>) {
        e.preventDefault();
        if (!input) return;
        router.push(`/search?term=${input}`)

    }
  return (
      <form
        onSubmit={handleSearch}  
          className='max-w-6xl mx-auto flex justify-between items-center px-5'>
          <input
              value={input}
              onChange={(e)=>setInput(e.target.value)}
              placeholder='Хайх зүйлээ бичнэ үү'
              type="text"
              className='w-full h-14 rounded-sm placeholder-gray-500 text-gray-500 outline-none bg-transparent dark:text-orange-400 flex-1' />
      <button
              className="text-orange-400 disabled:text-gray-400"
        disabled={!input}
            type='submit'>Хайх</button>
    </form>
  );
}

export default SearchBox
