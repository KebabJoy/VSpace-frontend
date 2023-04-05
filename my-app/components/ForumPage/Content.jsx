import styled from 'styled-components';
import { useEffect, useState } from 'react';
import getForums from '../../services/getForums';
import Link from 'next/link';

const ForumSearchContainer = styled.div`
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

const ForumListItem = styled.li`
  padding: 8px;
  font-size: 16px;
  border: 1px solid #ccc;
  border-radius: 4px;
  margin-bottom: 8px;
  cursor: pointer;

  &:hover {
    background-color: #eee;
  }
`;


const Content = () => {
  const [forumList, setForumList] = useState(null);
  const [searchTerm, setSearchTerm] = useState('');

  const handleSearchChange = (event) => {
    setSearchTerm(event.target.value);
  };

  const updateForums = () => {
    const token = localStorage.getItem('auth_token');
    if (!token) {
      return;
    }

    getForums(token, searchTerm).then((result) => {
      console.log(result);
      if (!result || !result.success) {
        return;
      }

      console.log('FORUM LIST LOADED');
      setForumList(result.forums);
    });
  };

  useEffect(() => {
    updateForums();
  }, [searchTerm]);

  return (
    <ForumSearchContainer>
      <SearchInput
        type="text"
        placeholder="Search forums"
        value={searchTerm}
        onChange={handleSearchChange}
      />
      <ForumList>
        {forumList &&
          forumList.map((forum) => (
            <Link key={forum.id} href={`/forums/${forum.id}`}>
              <ForumListItem key={forum.id}>
                Title: {forum.title}
                <br />
                Description: {forum.description}
              </ForumListItem>
            </Link>
          ))}
      </ForumList>
    </ForumSearchContainer>
  );
};

export default Content;
