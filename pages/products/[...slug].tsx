import { useContext, useMemo } from "react";

import { getMDXComponent } from "mdx-bundler/client";

import SidebarLayout from "../../components/SidebarLayout";
import { AttributeType } from "../../libs/content.types";
import { ContentPageProp, ContentStaticPropsParams, getStaticPathsForContentPage, getStaticPropsForContentPage } from "../../libs/contentpage.utils";
import EditPageLink from "../../components/EditPageLink";
import MdxContainer from "../../components/MdxContainer";
import DefaultContentContainer from "../../components/DefaultContentContainer";
import SiteContext from "../../components/SiteContext";

import siteConfig from '../../next-portal.config';

const C_TYPE = 'products';

function DocContent({ code, frontMatter, filePath }: {code: string, frontMatter: AttributeType, filePath?: string}) {

  const siteContext = useContext(SiteContext);
  const MdxComponent = useMemo(() => getMDXComponent(code, {siteConfig}), [code, siteConfig]);

  return (
    <div className="max-w-4xl">
      <div className="">
        <article className="space-y-2">
          <MdxContainer padding={false}>
            <MdxComponent />
          </MdxContainer>
          <EditPageLink filePath={filePath} label="[Edit this page]"/>
        </article>
      </div>
    </div>
  );
}

export default function DocPage({ code, frontMatter, menu, filePath }: ContentPageProp) {
  
  return (
    <DefaultContentContainer>
      <SidebarLayout menu={menu} >
        <DocContent code={code} frontMatter={frontMatter} filePath={filePath}></DocContent>
      </SidebarLayout>
    </DefaultContentContainer>
  )
}


export async function getStaticPaths() {
  return getStaticPathsForContentPage(C_TYPE);
}

export async function getStaticProps(params: ContentStaticPropsParams) {
  return getStaticPropsForContentPage(C_TYPE, params);
}
