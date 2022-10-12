import SidebarLayout from "../../components/SidebarLayout";
import { contentTreeToMenu } from "../../libs/content.util";
import { useContext, useMemo } from "react";
import { getMDXComponent } from "mdx-bundler/client";
import MenuItem from "../../libs/MenuItem";
import MdxContainer from "../../components/MdxContainer";
import { AttributeType } from "../../libs/content.types";
import { processMDX } from "../../libs/mdx";

import * as _contentTree from '../../content/blog/_content-tree.json'; 
import Link from "next/link";
import DefaultContentContainer from "../../components/DefaultContentContainer";
import SiteContext from "../../components/SiteContext";

import siteConfig from '../../next-portal.config';

type BlogExcerptProps = {
  code: string, 
  slug: string,
  frontMatter: AttributeType
}

function BlogExcerpt({ code, slug, frontMatter }: BlogExcerptProps) {
  
  const siteContext = useContext(SiteContext);
  const MdxComponent = useMemo(() => getMDXComponent(code, {siteConfig}), [code, siteConfig]);
  
  return (
    <div className="space-y-4 mb-6">
      <a href={slug} className="text-3xl font-bold">{frontMatter.title}</a>
      <div className="text-gray-500">{frontMatter.publishedAt}</div>
      <div className="text-gray-500">{frontMatter.author}</div>
      <div className="flex space-x-2">
      {
        frontMatter.tags && frontMatter.tags.map( (tag: string, idx: number) => {
          return <span key={idx} className="border-2 bg-lime-100 rounded-md px-2">{tag}</span>
        })
      }
      </div>
      <MdxContainer padding={false}>
        <MdxComponent />
      </MdxContainer>
      <Link href={slug}><a className="font-bold">Read More</a></Link>
    </div>
  )
}

type IndexPageProps = {
  docs: any[], menu: MenuItem
}
export default function IndexPage({ docs, menu }: IndexPageProps) {
  
  return (
    <DefaultContentContainer>
      <SidebarLayout menu={menu} >
        <div className="">
          {
            docs && docs.map( (doc: any) => 
                <div key={doc.slug}>
                  <BlogExcerpt code={doc.contentTruncated.code} slug={doc.slug} frontMatter={doc.meta} />
                </div>
            )
          }
        </div>
      </SidebarLayout>
    </DefaultContentContainer>
  )
}

export async function getStaticProps() {
  // TODO: Consider loading the files here, rather than relying on the generated json
  const docs = require("../../content/blog/_content-collection.json"); 

  const processedDocs = []
  for (const doc of docs) {
    processedDocs.push({ ...doc, contentTruncated: await processMDX(doc.meta.contentTruncated || "") });
  }

  const menuRoot = contentTreeToMenu(_contentTree);

  return { 
    props: { docs: processedDocs, menu: menuRoot} 
  };
}
