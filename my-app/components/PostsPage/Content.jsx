import styled from 'styled-components';
import { useEffect, useState } from 'react';
import getPosts from '../../services/getPosts';
import PostListItem from '../ForumPage/PostListItem';
import postMessage from '../../services/postMessage';

const PostSearchContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
`;

const SearchInput = styled.input`
  padding: 8px;
  width: 80%;
  height: 50px;
  border-bottom: 1px solid blue;
  border-radius: 8px;

  font-weight: 600;
  font-size: 14px;
  line-height: 17px;
  text-align: center;
  color: #0a2896;
`;

const ForumList = styled.ul`
  width: 80%;
  list-style: none;
  padding: 0;
  margin: 20px 0;
`;

const Content = (forumId) => {
  const [postsList, setPostsList] = useState(null);
  const [searchTerm, setSearchTerm] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    const token = localStorage.getItem('auth_token');
    if (!token) {
      return;
    }

    postMessage(token, message, forumId.forumId).then((response) => {
      console.log(response);
      if (response.success) {
        setPostsList([...postsList, response.post]);
      }
    });
    setMessage('');
  };
  const handleSearchChange = (event) => {
    setSearchTerm(event.target.value);
  };

  const updatePosts = () => {
    const token = localStorage.getItem('auth_token');
    if (!token) {
      return;
    }

    getPosts(token, forumId.forumId, searchTerm).then((result) => {
      console.log(result);
      if (!result || !result.success) {
        return;
      }

      console.log('POSTS LIST LOADED');
      setPostsList(result.posts);
    });
  };

  useEffect(() => {
    updatePosts();
  }, [searchTerm]);

  return (
    <PostSearchContainer>
      <SearchInput
        type="text"
        placeholder="Search posts"
        value={searchTerm}
        onChange={handleSearchChange}
      />
      <ForumList>
        {postsList && postsList.map((forum) => <PostListItem key={null} forum={forum} />)}
      </ForumList>
      <Form onSubmit={handleSubmit}>
        <FormGroup>
          <Label>Message</Label>
          <Textarea value={message} onChange={(event) => setMessage(event.target.value)} />
        </FormGroup>
        <Button type="submit">Submit</Button>
      </Form>
    </PostSearchContainer>
  );
};

const Form = styled.form`
  display: flex;
  flex-direction: column;
`;

const FormGroup = styled.div`
  margin-bottom: 20px;
`;

const Label = styled.label`
  display: block;
  margin-bottom: 5px;
  font-weight: bold;
`;


const Textarea = styled.textarea`
  padding: 10px;
  font-size: 16px;
  border: 1px solid #ccc;
  border-radius: 3px;
  height: 100px;
  width: 500px;
`;

const Button = styled.button`
  background-color: #3498db;
  color: white;
  border: none;
  border-radius: 3px;
  padding: 10px 20px;
  font-size: 14px;
  cursor: pointer;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: #2980b9;
  }
`;

export default Content;
