import React from 'react';
import LogoSymbolImg from '../../images/lloydssymbol.png';

export default function LogoSymbol({className="",width=60,height=60}) {
  return (
    <img src={LogoSymbolImg} className={className} width={width} height={height} />
  );
}