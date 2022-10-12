import Fuse from "fuse.js"
import Link from "next/link"
import { useState } from "react"

const options = { keys: ['slug', 'content', 'meta.title', 'meta.publishedAt', 'meta.publishedAt', 'meta.tags'] }

const fullCollectionIndex = require('../content/_content-collection.full.json')
const fuseIndex = require('../content/fuse-index.json')
const myIndex = Fuse.parseIndex(fuseIndex)

// initialize Fuse with the index
const fuse = new Fuse(fullCollectionIndex, options, myIndex)

function SearchResult({result, clickHandler}: {result: any[] | undefined, clickHandler: ()=>void}) {

  return (
    result && result.length > 0 ?  
      <div className="absolute left-0 z-80 border bg-gray-50 rounded w-72 ">
        {
          result && result.map((hit, idx:number ) => {
            return (<div key={idx} className="flex p-1 pb-2 items-center">
              <div className="bg-gray-200 rounded-md mr-2 text-xs p-1">{hit.item.ctype}</div>
              <Link href={hit.item.slug}><a onClick={clickHandler} className="hover:text-lime-700">{hit.item.meta.title}</a></Link>
            </div>)
          })
        }
      </div> : <div></div>
  )

}

export default function QuickSearch() {
  
  const [search, setSearch] = useState<string | undefined>('');
  const [result, setResult] = useState<any[] | undefined>([]);

  function handleChange(event: React.ChangeEvent<HTMLInputElement>) {
    const {name, value} = event.currentTarget;
    setSearch(value);

    if (value.length > 1) {
      const result = fuse.search(value);
      setResult(result);
    } else {
      setResult([]);
    }
  }

  function handleClick() {
    setSearch('');
    setResult([]);
  }

  return (
    <div className="relative w-24 text-gray-700">
      <div className="">
        <input type="text" placeholder="Search" name="searchText" value={search} onChange={handleChange} 
          className="rounded w-full border border-gray-300 focus:outline-none focus:border-lime-600" />
        <button type="submit" className="absolute right-0 top-1 mr-4">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
        </svg>
        </button>
      </div>

      <SearchResult result={result} clickHandler={handleClick} />
    </div>
    )
}
