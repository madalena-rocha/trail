import React from 'react';
import { useState } from 'react';
import './styles.css';

import { FcLike } from 'react-icons/fc';
import { FcLikePlaceholder } from 'react-icons/fc';

export default function LikeButton() {
    const [like, setLike] = useState(0)

  return (
    <>
        <button onClick={() => setLike(!like)}>
            {like ? <FcLike /> : <FcLikePlaceholder />}            
        </button>
    </>
);
}

