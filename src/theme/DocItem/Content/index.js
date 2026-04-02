import React from 'react';
import Content from '@theme-original/DocItem/Content';
import NoticePane from '@site/src/components/theme/NoticePane';

export default function ContentWrapper(props) {
  return (
    <div className='break-keep'>
      <Content {...props} />
      <NoticePane disable={false} />
    </div>
  );
}
