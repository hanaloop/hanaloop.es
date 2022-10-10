import { createContext } from 'react';

export type AuthorType = {
  name: string,
  title? : string,
  url?: string,
  image_url?: string
}

export type SiteContextType = {
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

  authors? : { [key: string]: AuthorType },
  themeConfig?: any
}

const SiteContext = createContext<SiteContextType>({contentRoot: 'content'});

export default SiteContext;
