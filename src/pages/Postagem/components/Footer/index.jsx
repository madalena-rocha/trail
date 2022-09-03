import React from 'react';
import './styles.css';
import Comment from '../Comment';

export default function Footer() {
  return (
    <div className="container-footer">
        <div className="footer">
          <Comment />
          <div className="black-btm">
          </div>
        </div>
    </div>
  );
}

