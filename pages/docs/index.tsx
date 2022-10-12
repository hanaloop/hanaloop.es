import SidebarLayout from "../../components/SidebarLayout";
import { useContext, useMemo } from "react";
import { getMDXComponent } from "mdx-bundler/client";
import MenuItem from "../../libs/MenuItem";
import { AttributeType, ContentTreeItem } from "../../libs/content.types";
import MdxContainer from "../../components/MdxContainer";
import { getStaticPropsForIndexContentPage } from "../../libs/contentpage.utils";
import DefaultContentContainer from "../../components/DefaultContentContainer";
import SiteContext from "../../components/SiteContext";

import siteConfig from '../../next-portal.config';

const C_TYPE = 'docs';

type IndexPageProps = {
  code: string, 
  frontMatter: AttributeType, 
  contentTree: ContentTreeItem,
  menuRoot: MenuItem
}

export default function IndexPage({ code, frontMatter, menuRoot, contentTree }: IndexPageProps) {
  
  const siteContext = useContext(SiteContext);
  const MdxComponent = useMemo(() => getMDXComponent(code, {siteConfig}), [code, siteConfig]);
  
  return (
    <DefaultContentContainer>
      <SidebarLayout menu={menuRoot} >
        <MdxContainer padding={false}>
          <MdxComponent />
        </MdxContainer>
      </SidebarLayout>
    </DefaultContentContainer>
  )
}

export async function getStaticProps() {
  return getStaticPropsForIndexContentPage(C_TYPE);
}
