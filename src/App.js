import "./style.scss";
import React, { useState } from "react";
import {
  LikeIcon,
  ReplyIcon,
  RetweetIcon,
  ShareIcon,
  VerifiedIcon,
} from "./icons";

// 45:00

const tweetFormat = (tweet) => {
  tweet = tweet
    .replace(/@([\w]+)/g, "<span>@$1</span>")
    .replace(/#([\wşçöğüıİ]+)/gi, "<span>#$1</span>")
    .replace(/(https?:\/\/[\w\.\/]+)/, "<span>$1</span>");
  return tweet;
};

function App() {
  const [name, setName] = useState();
  const [username, setUsername] = useState();
  const [isVerified, setIsVerified] = useState(true);
  const [tweet, setTweet] = useState();
  const [avatar, setAvatar] = useState();
  const [retweets, setRetweets] = useState(0);
  const [quoteTweets, setQuoteTweets] = useState(0);
  const [likes, setLikes] = useState(0);

  return (
    <>
      <div className="tweet-settings">
        <h3>Tweet Ayarları</h3>
        <ul>
          <li>
            <label>Ad Soyad</label>
            <input
              type="text"
              className="input"
              value={name}
              onChange={(e) => setName(e.target.value)}
            ></input>
          </li>
          <li>
            <label>Kullanıcı Adı</label>
            <input
              type="text"
              className="input"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
            ></input>
          </li>
          <li>
            <label>Tweet</label>
            <textarea
              className="textarea"
              maxLength="290"
              value={tweet}
              onChange={(e) => setTweet(e.target.value)}
            ></textarea>
          </li>
          <li>
            <label>Retweet</label>
            <input
              type="number"
              className="input"
              value={retweets}
              onChange={(e) => setRetweets(e.target.value)}
            ></input>
          </li>
          <li>
            <label>Alıntı Tweetler</label>
            <input
              type="number"
              className="input"
              value={quoteTweets}
              onChange={(e) => setQuoteTweets(e.target.value)}
            ></input>
          </li>
          <li>
            <label>Beğeni</label>
            <input
              type="number"
              className="input"
              value={likes}
              onChange={(e) => setLikes(e.target.value)}
            ></input>
          </li>
        </ul>
      </div>
      <div className="tweet-container">
        <div className="tweet">
          <div className="tweet-author">
            <img src="https://picsum.photos/200/300"></img>
            <div>
              <div className="name">
                {name || "Ad Soyad"}
                {!isVerified || <VerifiedIcon width="19" height="19" />}
              </div>
              <div className="username">@{username || "Kullanıcı adı"}</div>
            </div>
          </div>
          <div className="tweet-content">
            <p
              dangerouslySetInnerHTML={{
                __html:
                  (tweet && tweetFormat(tweet)) || "Bu alana tweet gelecek.",
              }}
            ></p>
          </div>
          <div className="tweet-stats">
            <span>
              <b>{retweets}</b> Retweet
            </span>
            <span>
              <b>{quoteTweets}</b> Alıntı Tweetler
            </span>
            <span>
              <b>{likes}</b> Beğeni
            </span>
          </div>
          <div className="tweet-actions">
            <span>
              <ReplyIcon color="#6e767d" />
            </span>
            <span>
              <RetweetIcon />
            </span>
            <span>
              <LikeIcon />
            </span>
            <span>
              <ShareIcon />
            </span>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
