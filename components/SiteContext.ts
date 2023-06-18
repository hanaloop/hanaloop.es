import { createContext } from 'react';

export type AuthorType = {
  type?: string,
  name: string,
  name_alt?: string,
  title? : string,
  description?: string,
  tagline?: string,
  url?: string,
  image_url?: string
  education?: string
  profile_url?: string
}

export type SiteContextType = {
  name: string,
  title?: string,
  tagline?: string,
  keywords?: string,
  url?: string,
  basePath?: string,
  favicon?: string,
  organizationName?: string, // Usually your GitHub org/user name.
  projectName?: string,
  projectImage?: string,
  editUrl?: string, // Base url for content editing in git hosting UI

  contentRoot: string,
  contentTypes?: string[], 

  members? : { [key: string]: AuthorType },
  themeConfig?: any
}

const SiteContext = createContext<SiteContextType>({name: 'HanaLoop', contentRoot: 'content'});

export default SiteContext;
