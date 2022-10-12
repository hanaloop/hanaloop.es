import SidebarLayout from "../../components/SidebarLayout";
import { useContext, useMemo } from "react";
import { getMDXComponent } from "mdx-bundler/client";
import { AttributeType, ContentTreeItem } from "../../libs/content.types";
import MdxContainer from "../../components/MdxContainer";
import MenuItem from "../../libs/MenuItem";
import { getStaticPropsForIndexContentPage } from "../../libs/contentpage.utils";
import Link from "next/link";
import DefaultContentContainer from "../../components/DefaultContentContainer";
import SiteContext from "../../components/SiteContext";

import siteConfig from '../../next-portal.config';

const C_TYPE = 'products';

type IndexPageProps = {
  code: string, 
  frontMatter: AttributeType, 
  contentTree: ContentTreeItem,
  menuRoot: MenuItem
}

function ProductTable({contentTree}:{contentTree: ContentTreeItem}) {

  return(
    <>
      <table className="table-auto">
        <thead className="bg-gray-100 shadow-md">
          <tr className="p-2">
            <th>Product</th>
            <th>API</th>
          </tr>
        </thead>

        <tbody className="divide-gray-200">
          {
            contentTree && contentTree.contents?.filter(item => item._type === "folder")
              .map( (item, rowIdx: number) => {

                const OpenApis = item.contents?.filter(prodItem => prodItem._type === "openapi")
                  .map( (prodItem, idx: number) => <div key={idx} className="text-sm ">
                    <Link href={`/${C_TYPE}/apidoc?source=${prodItem.slug}`}>
                        <a className="hover:text-lime-600">{prodItem.slug.substring(prodItem.slug.lastIndexOf('/')+1)}</a>
                    </Link>
                  </div>);

                return (
                  <tr key={rowIdx} className="text-gray-700 p-2 border-b-2">
                    <td className="p-2">
                      <h3 className="font-bold">{item.meta.label}</h3>
                      <p className="text-sm ">{item.meta?.description}</p>
                    </td>
                    <td className="p-2">{OpenApis}</td>
                  </tr>
                )
            })
          }
          
        </tbody>
      </table>
    </>
  )
}

export default function IndexPage({ code, frontMatter, contentTree, menuRoot }: IndexPageProps) {
  
  const siteContext = useContext(SiteContext);
  const MdxComponent = useMemo(() => getMDXComponent(code, {siteConfig}), [code, siteConfig]);

  return (
    <DefaultContentContainer>
      <SidebarLayout menu={menuRoot} padding={false} >
        <>
          <div className="h-8 p-2 bg-gray-300 text-gray-600 font-semibold text-sm">{frontMatter.label}</div>

          <div className="p-2 ">
            <div className="overflow-hidden rounded-xl">
              {contentTree.meta.image && <img
                src={contentTree.meta.image}
                width={800}
                height={533}
                alt="cover image"
                className="h-24 w-full object-cover mix-blend-overlay"
              />
              }
            </div>
          </div>

          <MdxContainer>
            <MdxComponent />
          </MdxContainer>
          
          <div className="p-4">
            <ProductTable contentTree={contentTree}/>
          </div>
        </>
      </SidebarLayout>
    </DefaultContentContainer>
  )
}

export async function getStaticProps() {
  return getStaticPropsForIndexContentPage(C_TYPE);
}
