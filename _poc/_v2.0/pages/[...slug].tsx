import { useContext, useMemo } from "react";

import { getMDXComponent } from "mdx-bundler/client";

import SiteContext from "../components/SiteContext";
import { AttributeType } from "../libs/content.types";
import { ContentPageProp, ContentStaticPropsParams, getStaticPathsForContentPage, getStaticPropsForContentPage } from "../libs/contentpage.utils";
import EditPageLink from "../components/EditPageLink";
import MdxContainer from "../components/MdxContainer";
import DefaultContentContainer from "../components/DefaultContentContainer";

import siteConfig from '../next-portal.config';

const C_TYPE = 'pages';

function DocContent({ code, frontMatter, filePath }: {code: string, frontMatter: AttributeType, filePath?: string}) {

  const siteContext = useContext(SiteContext);
  
  const MdxComponent = useMemo(() => getMDXComponent(code, {siteConfig}), [code, siteConfig]);

  return (
    <div className="space-y-2">
      <MdxContainer padding={false}>
        <MdxComponent />
      </MdxContainer>
      {/* <EditPageLink filePath={filePath} label="[Edit this page]"/> */}
    </div>
  );
}

export default function PlainPage({ code, frontMatter, menu, filePath }: ContentPageProp) {
  
  return (
    <DefaultContentContainer background={frontMatter?.headerBackground} hero={frontMatter?.hero}>
      <DocContent code={code} frontMatter={frontMatter} filePath={filePath}></DocContent>
    </DefaultContentContainer>
  )
}


export async function getStaticPaths() {
  return getStaticPathsForContentPage(C_TYPE);
}

export async function getStaticProps(params: ContentStaticPropsParams) {
  return getStaticPropsForContentPage(C_TYPE, params);
}
