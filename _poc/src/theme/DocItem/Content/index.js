import React from 'react';
import Content from '@theme-original/DocItem/Content';
import CBAMBanner from '@site/src/components/theme/CBAMBanner';

export default function ContentWrapper(props) {
  return (
    <div className='break-keep'>
      <Content {...props} />
      <CBAMBanner/>
    </div>
  );
}
