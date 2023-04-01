import { useState } from 'react';
import styled from 'styled-components';
import postReaction from '../../services/postReaction';

const PostListItem = ({ forum }) => {
  const [likes, setLikes] = useState(forum.upvotes);
  const [dislikes, setDislikes] = useState(forum.downvotes);
  const [liked, setLiked] = useState(forum.reaction);

  const handleReaction = (value) => {
    const token = localStorage.getItem('auth_token');
    if (!token) {
      return;
    }

    if (value === -1) {
      value === liked ? setDislikes(dislikes - 1) : setDislikes(dislikes + 1);
    } else if (value === 1) {
      value === liked ? setLikes(likes - 1) : setLikes(likes + 1);
    }

    liked === value ? setLiked(0) : setLiked(value);

    postReaction(liked, token, forum.id, 'post').then((r) => {
      console.log(r);
    });
  };

  return (
    <PostListItemContainer>
      <Author>Author: {forum.creator_fullname}</Author>
      <Data>{forum.data}</Data>
      <LikeButton value={1} onClick={(event) => handleReaction(parseInt(event.target.value))}>
        Like
      </LikeButton>
      <DislikeButton value={-1} onClick={(event) => handleReaction(parseInt(event.target.value))}>
        Dislike
      </DislikeButton>
      <Likes>{likes} Likes</Likes>
      <Dislikes>{dislikes} Dislikes</Dislikes>
    </PostListItemContainer>
  );
};

const PostListItemContainer = styled.div`
  margin-bottom: 20px;
  padding: 8px;
  font-size: 16px;
  border: 1px solid #ccc;
  border-radius: 4px;
`;

const Author = styled.span`
  font-weight: bold;
`;

const Data = styled.p`
  margin-top: 5px;
`;

const LikeButton = styled.button`
  background-color: #2ecc71;
  color: white;
  border: none;
  border-radius: 3px;
  padding: 10px 20px;
  font-size: 14px;
  cursor: pointer;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: #27ae60;
  }
`;

const DislikeButton = styled.button`
  background-color: #e74c3c;
  color: white;
  border: none;
  border-radius: 3px;
  padding: 10px 20px;
  font-size: 14px;
  cursor: pointer;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: #c0392b;
  }
`;

const Likes = styled.span`
  margin-right: 10px;
`;

const Dislikes = styled.span`
  margin-right: 10px;
`;

export default PostListItem;
