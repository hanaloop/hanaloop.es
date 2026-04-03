import React from 'react';

import SidebarLayout from "../../components/SidebarLayout";
import MdxContainer from "../../components/MdxContainer";
import { contentTreeToMenu } from "../../libs/content.util";
import MenuItem from "../../libs/MenuItem";
import { useEffect, useState } from "react";
import { ContentTreeItem } from '../../libs/content.types';

// https://github.com/swagger-api/swagger-ui/issues/7970
// NOTE: When ran from nestjs server (i.e. yarn dev) the SwaggerUI hangs with "loading" sign.
//       But when built and served as webserver (e.g. yarn build && yarn start) it works fine.
import dynamic from "next/dynamic";
const SwaggerUI = dynamic(import('swagger-ui-react'), {ssr: false})
import "swagger-ui-react/swagger-ui.css";
import DefaultContentContainer from '../../components/DefaultContentContainer';


const C_TYPE = 'products';

type IndexPageProps = {
  contentTree: ContentTreeItem,
  menuRoot: MenuItem
}

// TODO: this page fails on `yarn build`
export default function IndexPage({ menuRoot, contentTree }: IndexPageProps) {
  
  const [specSource, setSpecSource] = useState<string | null>();
  
  useEffect(() => {

    // TODO: fetch metadata from server (just a static json)
    // fetch('/manifest.json', {method: 'GET'})
    //   .then(response => response.json())
    //   .then(data => {
    //     setManifest(data);
    //     console.log(data);
    //   });

    let search = window.location.search;
    let urlParams = new URLSearchParams(search);
    let sourceUrl = urlParams.get('source');

    setSpecSource(sourceUrl);

  }, []);
  
  return (
    <DefaultContentContainer>
      <SidebarLayout menu={menuRoot} >
        <MdxContainer>        
          <div>
            {
              // After dependency upgrade, following line causes error on build 
              // "Error: Failed to collect page data for /products/apidoc"
              // TODO: try other Swagger UI library
            specSource ? <SwaggerUI url={specSource} /> :
              <div>Provide OpenAPI spec source URL in the query param</div>
            }
          </div>
        </MdxContainer>
      </SidebarLayout>
    </DefaultContentContainer>
  )
}

export async function getStaticProps() {
  // TODO: refactor
  const _contentTree = require(`../../content/${C_TYPE}/_content-tree.json`); 

  const menuRoot = contentTreeToMenu(_contentTree);

  if (menuRoot.subItems) {
    for (let i = 0; i < menuRoot.subItems.length!; i++) {
      if (menuRoot.subItems[i].link === `/${C_TYPE}/_index`) {
        menuRoot.subItems[i].link = `/${C_TYPE}`;
      }
    }
  }
  
  return { 
    props: { menuRoot, contentTree: _contentTree} 
  };
}
