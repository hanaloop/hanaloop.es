import { useContext, useMemo } from "react";
import Image from "next/image";

import { getMDXComponent } from "mdx-bundler/client";

import SidebarLayout from "../../components/SidebarLayout";
import { AttributeType } from "../../libs/content.types";

import { ContentPageProp, ContentStaticPropsParams, getStaticPathsForContentPage, getStaticPropsForContentPage } from "../../libs/contentpage.utils";
import EditPageLink from "../../components/EditPageLink";
import AuthorsPane from "../../components/AuthorsPane";
import MdxContainer from "../../components/MdxContainer";
import DefaultContentContainer from "../../components/DefaultContentContainer";
import SiteContext from "../../components/SiteContext";

import siteConfig from '../../next-portal.config';

const C_TYPE = "blog";

function DocContent({ code, frontMatter, filePath }: {code: string, frontMatter: AttributeType, filePath?: string}) {

  const siteContext = useContext(SiteContext);
  const MdxComponent = useMemo(() => getMDXComponent(code, {siteConfig}), [code, siteConfig]);

  return (
    <div className="max-w-4xl">
      <div className="">
        <div className="flex flex-col space-y-2">
          <h2 className="text-5xl font-black text-gray-800">
            {frontMatter.title}
          </h2>
          <AuthorsPane authors={frontMatter.authors} />
          <div className="flex items-center space-x-3">
            <p className="px-3 py-1 text-sm text-purple-500 bg-gray-100 rounded-full">
              {frontMatter.readingTime.text}
            </p>
            <p className="px-3 py-1 text-sm text-purple-500 bg-gray-100 rounded-full">
              Date : {frontMatter.publishedAt}
            </p>
          </div>
          <div className="overflow-hidden rounded-xl">
            {frontMatter.image && <Image
              src={frontMatter.image}
              width={800}
              height={533}
              layout="responsive"
              alt="cover image"
            />
            }
          </div>
        </div>
        <div className="flex flex-col space-y-2">
          <MdxContainer padding={false}>
            <MdxComponent />
          </MdxContainer>
          <EditPageLink filePath={filePath} label="[Edit this page]"/>
        </div>
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
