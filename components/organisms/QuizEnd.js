import React from "react";
import { FacebookShareButton, FacebookIcon } from "react-share";

import Button from "../atoms/Button";

export default function QuizEnd({ url, score, maxScore }) {
  return (
    <div>
      Ended :3 Your score is {score}/{maxScore}!
      <Button>
        <FacebookShareButton url={url} quote="Hi" hashtag="#quizzesnet">
          Share your score
        </FacebookShareButton>
      </Button>
    </div>
  );
}
