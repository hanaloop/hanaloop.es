import Fuse from "fuse.js";
import Link from "next/link";
import { useState } from "react";
import { Tab } from '@headlessui/react'
import DefaultContentContainer from "../components/DefaultContentContainer";

const options = { keys: ['slug', 'content', 'meta.title', 'meta.publishedAt', 'meta.publishedAt', 'meta.tags'] }

const fullCollectionIndex = require('../content/_content-collection.full.json')
const fuseIndex = require('../content/fuse-index.json')
const myIndex = Fuse.parseIndex(fuseIndex)

// initialize Fuse with the index
const fuse = new Fuse(fullCollectionIndex, options, myIndex)

type ResultByType = { 
  [key: string]: any[] | undefined 
}

const CATEGORIES: any = {
  'blog': {label: 'Blog'},
  'docs': {label: 'Documents'},
  'products': {label: 'Products'}
}

function classNames(...classes: string[]) {
  return classes.filter(Boolean).join(' ')
}

function SearchResult({result, clickHandler}: {result: ResultByType, clickHandler: ()=>void}) {

  return (
    <Tab.Group>
      <Tab.List className="flex space-x-3">
        {Object.keys(CATEGORIES).map( (key: string, idx: number) => (
        <Tab key={key} className={({ selected }) =>
          classNames(
            "py-1 px-3 rounded-t-md  ",
            selected
                ? 'bg-secondary-700 text-gray-50'
                : 'text-secondary-600 hover:bg-secondary-400 hover:text-white'
          )} >
          <div className="flex items-center">{CATEGORIES[key].label}
          <div className="px-1 ml-2 rounded-lg text-sm bg-secondary-500 text-gray-100">{result[key]?.length}</div></div>
        </Tab>
        ))}
      </Tab.List>
      <Tab.Panels className="p-3 border border-secondary-600 bg-gray-50">
        {Object.values(result).map( (value, idx: number) => (
        <Tab.Panel key={idx}>
          {value && value.map((hit, idx:number ) => {
            return (<div key={idx} className="flex p-1 pb-2 items-center">
              <Link href={hit.item.slug}><a onClick={clickHandler} className="hover:text-lime-700">{hit.item.meta.title}</a></Link>
            </div>)
          })}
        </Tab.Panel>
        ) )}
      </Tab.Panels>
    </Tab.Group>
  )
}


export default function SearchPage() {
  
  const [search, setSearch] = useState<string | undefined>('');
  const [result, setResult] = useState<ResultByType>({});

  function handleChange(event: React.ChangeEvent<HTMLInputElement>) {
    const {name, value} = event.currentTarget;
    setSearch(value);

    if (value.length > 1) {
      const result = fuse.search(value);
      
      const resultByType = {
        blog: result?.filter( (entry: any) => entry.item.ctype === 'blog'),
        docs: result?.filter( (entry: any) => entry.item.ctype === 'docs'),
        products: result?.filter( (entry: any) => entry.item.ctype === 'products')
      }
      setResult(resultByType);
      // setResult(result);
    } else {
      setResult({});
    }
  }

  function handleClick() {
  }

  return (
    <DefaultContentContainer >
        <div className="p-10 mb-4">
          <h2 className="text-3xl font-bold text-gray-600">Search</h2>
          <div className="form-entry my-5">
            <input type="text" placeholder="Search" name="searchText" value={search} onChange={handleChange} className="rounded-md w-full border border-gray-300 focus:outline-none focus:border-lime-600 p-1" />
            <button type="submit" className="absolute right-0 top-1 mr-4">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
            </svg>
            </button>
          </div>

        <SearchResult result={result} clickHandler={handleClick} />
      </div>
    </DefaultContentContainer>
  )
}
