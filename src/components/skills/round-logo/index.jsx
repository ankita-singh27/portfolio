import React from 'react';
import "./style.scss";

const RoundLogo = ({name,source}) => {
  return (
    <div className='rd-logo'>
        <figure className="rd-logo__outer">
            <img className='rd-logo__outer__img' src={source} alt="" />
            <figcaption className='rd-logo__outer__cap'>{name}</figcaption>
            <div className='rd-logo__outer__name'>{name}</div>
        </figure>
    </div>
  )
}

export default RoundLogo;