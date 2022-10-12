import { useContext } from "react";
import { isObject, isString } from "../libs/type.utils";
import SiteContext, { AuthorType } from "./SiteContext";

export default function AuthorsPane({authors}: {authors?: AuthorType | AuthorType[] | string | string[] | undefined}) {

  const siteContext = useContext(SiteContext);

  function addAuthorById(_authors: AuthorType[], auhorId: string) {
    const author = siteContext.members && siteContext.members[auhorId]
    author && _authors.push(author);
  }

  let _authors: AuthorType[] = [];
  if (isObject(authors)) {
    _authors.push(authors as AuthorType);
  } else if (isString(authors)) {
    addAuthorById(_authors, authors as string);
  } else if (Array.isArray(authors)) {
    for (const author of authors) {
      if (isString(author)) {
        addAuthorById(_authors, author as string);
      } else if (isObject(author)) {
        _authors.push(author as AuthorType);
      }
    }
  }

  // console.log("**_authors", JSON.stringify(_authors, null, 2));

  return (
    <div className="grid grid-cols-2 gap-2">
      {_authors && _authors.map((author: AuthorType, idx: number) => (
      <div key={idx} className="flex items-center mb-2">
        <img className="rounded-full h-10 mr-2" src={author.image_url}></img>
        <div>
          <h2 className="font-bold text-lime-600 "><a href={author.url} target="_blank" rel="noopener noreferrer">
            {author.name}
          </a></h2>
          <div className="text-sm">{author.title}</div>
        </div>
      </div>
      ))}
    </div>
  )
}
