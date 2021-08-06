import { useRef } from 'react';
import { useRouter } from 'next/router';
import Head from 'next/head'

export default function Home() {

  const searchInputRef = useRef(null);
  const router = useRouter();

  const search = (event) => {
    event.preventDefault();
    const term = searchInputRef.current.value;

    if (!term) {
      return;
    }

    router.push(`/recipe?term=${term}`);

  }

  return (
    <div>
      
      <Head>
        <title> Food Search </title>
      </Head>
      
      {/* Body */}
        <form>
          <div>
            <input ref={searchInputRef} type="text"/>
          </div>
          
          {/* Buttons */}
          <div>
            <button onClick={(event)=>search(event)}> Food Search </button>
          </div>
        </form>
    </div>
  )
}