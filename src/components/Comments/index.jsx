import React from "react";

import Comments from './Comments';
import "./styles.css";

export default function index() {
  return (
    <div>
      <Comments
        commentsUrl="http://localhost:3004/comments"
        currentUserId="1"
      />
    </div>
  );
}
