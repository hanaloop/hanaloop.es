import { useContext, useMemo } from "react";

import { getMDXComponent } from "mdx-bundler/client";
import Image from "../../components/theme/Image";
import SidebarLayout from "../../components/SidebarLayout";
import { AttributeType } from "../../libs/content.types";
import { ContentPageProp, ContentStaticPropsParams, getStaticPathsForContentPage, getStaticPropsForContentPage } from "../../libs/contentpage.utils";
import EditPageLink from "../../components/EditPageLink";
import MdxContainer from "../../components/MdxContainer";
import DefaultContentContainer from "../../components/DefaultContentContainer";
import SiteContext from "../../components/SiteContext";
import AuthorsPane from "../../components/AuthorsPane";

import siteConfig from '../../next-portal.config';
import { Tags } from "../../components/Tags";

const C_TYPE = "docs";

function DocContent({ code, frontMatter, filePath }: {code: string, frontMatter: AttributeType, filePath?: string}) {

  const siteContext = useContext(SiteContext);
  const MdxComponent = useMemo(() => getMDXComponent(code, {siteConfig}), [code, siteConfig]);

  return (
    <>
    {frontMatter.imageHide !== true && frontMatter.image && <Image className="object-cover h-64 w-full bg-center" src={frontMatter.image} alt={""} />}
    <div className="p-4 max-w-4xl">
      <div className="">
        <div className="flex flex-col space-y-4">
          <h2 className="text-4xl font-bold text-gray-600">
            {frontMatter.title}
          </h2>
          <p className="text-xl text-gray-500">{frontMatter.subtitle}</p>
          <div className="flex items-center space-x-3">
            <p className="px-3 py-1 text-sm text-lime-600 bg-gray-100 rounded-full">
              {frontMatter.readingTime.text}
            </p>
            <p className="px-3 py-1 text-sm text-lime-600 bg-gray-100 rounded-full">
              Date : {frontMatter.publishedAt}
            </p>
          </div>
        </div>
        <div className="flex flex-col space-y-2 pt-4">
          <MdxContainer padding={false}>
            <MdxComponent />
          </MdxContainer>
          <hr />
          <AuthorsPane authors={frontMatter.authors} />
          <EditPageLink filePath={filePath} label="[Edit this page]"/>
        </div>
      </div>
    </div>
    </>
  );
}

export default function DocPage({ code, frontMatter, menu, filePath }: ContentPageProp) {
  
  return (
    <DefaultContentContainer>
      <SidebarLayout menu={menu} padding={false} >
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
