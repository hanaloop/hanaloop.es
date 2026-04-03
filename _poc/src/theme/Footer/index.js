import React from 'react';
import Footer from '@theme-original/Footer';

export default function FooterWrapper(props) {
  return (
    <>
      <Footer {...props} />
      <div className='py-2 bg-[#303846] text-white text-center'>
        <div>서울특별시 관악구 봉천로 545, 서울창업센터 관악 4층</div>
        <div>email: info@hanaloop.com  |  phone: +82 0507-1337-9251</div>
      </div>

    </>
  );
}
