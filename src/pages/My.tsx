import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import threeDot from '../assets/3dot.png';
import waguri9Url from '../assets/waguri9.png';
import FlowButton from '../components/button/FlowButton';
import Container from '../components/Container';
import { getNickname } from '../utils/nickname';

const POSTS_STORAGE_KEY = 'communityPosts';

interface Post {
  id: number;
  title: string;
  content: string;
  tags: string[];
  createdAt: string;
  author: string;
}

export default function My() {
  const navigate = useNavigate();
  const [posts, setPosts] = useState<Post[]>([]);
  const [showDeleteModal, setShowDeleteModal] = useState<number | null>(null);
  const [showCompleteModal, setShowCompleteModal] = useState(false);
  const [showDeleteConfirm, setShowDeleteConfirm] = useState(false);
  const [deletingPost, setDeletingPost] = useState<Post | null>(null);
  const [modalMessage, setModalMessage] = useState('');
  const nickname = getNickname();

  useEffect(() => {
    const savedPosts = JSON.parse(localStorage.getItem(POSTS_STORAGE_KEY) || '[]');
    const myPosts = savedPosts.filter((post: Post) => post.author === nickname);
    setPosts(myPosts);
  }, [nickname]);

  const handleLogout = () => {
    localStorage.removeItem('key');
    navigate('/main');
  };

  const handleDelete = (post: Post) => {
    setDeletingPost(post);
    setShowDeleteModal(null);
    setShowCompleteModal(true);
    setModalMessage('진짜로 이 글을\n삭제할 생각이야??ㅜㅠ');
  };

  const handleDeleteConfirm = () => {
    if (deletingPost) {
      setModalMessage('그래도 괜찮아!!\n우리 같이 힘내서 또 써보자~');
      setTimeout(() => {
        setShowCompleteModal(false);
        setShowDeleteConfirm(true);
        const updatedPosts = posts.filter(post => post.id !== deletingPost.id);
        localStorage.setItem(POSTS_STORAGE_KEY, JSON.stringify(updatedPosts));
        setPosts(updatedPosts);
        setTimeout(() => {
          setShowDeleteConfirm(false);
          setDeletingPost(null);
        }, 2000);
      }, 1500);
    }
  };

  const handleDeleteCancel = () => {
    setModalMessage('그치?? 정말 긍정적인\n생각이야!! 앞으로도 화이팅!');
    setTimeout(() => {
      setShowCompleteModal(false);
      setDeletingPost(null);
    }, 1500);
  };

  return (
    <Container>
      <Wrapper>
        <HeaderSection>
          <Categories>
            <p>현재 {nickname} 님의 마이페이지</p>
          </Categories>
          <LogoutButton onClick={handleLogout}>
            로그아웃
          </LogoutButton>
        </HeaderSection>
        {posts.length === 0 ? (
          <EmptyState>
            <p>아직 작성한 게시글이 없습니다.</p>
          </EmptyState>
        ) : (
          <PostList>
            {posts.map(post => (
              <PostItem key={post.id}>
                <PostHeader>
                  <PostTitle>{post.title}</PostTitle>
                  <HeaderRight>
                    <PostTags>
                      {post.tags.map(tag => (
                        <PostTag key={tag}>{tag}</PostTag>
                      ))}
                    </PostTags>
                    <PostActions>
                      <MoreButton onClick={() => setShowDeleteModal(post.id)}>
                        <img src={threeDot} alt="더보기" />
                      </MoreButton>
                      {showDeleteModal === post.id && (
                        <DeleteModal>
                          <DeleteButton onClick={() => handleDelete(post)}>
                            삭제하기
                          </DeleteButton>
                        </DeleteModal>
                      )}
                    </PostActions>
                  </HeaderRight>
                </PostHeader>
                <PostContent>{post.content}</PostContent>
              </PostItem>
            ))}
          </PostList>
        )}

        {showCompleteModal && (
          <BlackModal>
            <img src={waguri9Url} alt="character" />
            <SpeechBubble>
              <p>{modalMessage}</p>
            </SpeechBubble>
            {modalMessage === '진짜로 이 글을\n삭제할 생각이야??ㅜㅠ' && (
              <ButtonGroup>
                <div onClick={handleDeleteConfirm}>
                  <FlowButton span="맞아.. 삭제할 거야" />
                </div>
                <div onClick={handleDeleteCancel}>
                  <FlowButton span="아니야!! 취소" />
                </div>
              </ButtonGroup>
            )}
          </BlackModal>
        )}

        {showDeleteConfirm && (
          <DeleteConfirmMessage>
            <p>와구리짱님의 커뮤니티 글이<br />삭제되었습니다</p>
          </DeleteConfirmMessage>
        )}
      </Wrapper>
    </Container>
  );
}

const Wrapper = styled.div`
  width: calc(100% - 62px);
  height: calc(100% - 80px);
  display: flex;
  flex-direction: column;
  gap: 32px;
`;

const HeaderSection = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const Categories = styled.section`
  display: flex;
  flex-direction: column;
  gap: 16px;

  & > p {
    color: #a0a0a0;
  }
`;

const LogoutButton = styled.button`
  padding: 8px 16px;
  background-color: #f3f4f6;
  border: 1px solid #d1d5db;
  border-radius: 8px;
  color: #6b7280;
  font-size: 14px;
  cursor: pointer;
  transition: all 0.2s;

  &:hover {
    background-color: #e5e7eb;
    color: #374151;
  }
`;

const EmptyState = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 200px;
  background-color: #f9fafb;
  border-radius: 12px;

  p {
    color: #6b7280;
    font-size: 16px;
  }
`;

const PostList = styled.div`
  display: flex;
  flex-direction: column;
  gap: 24px;
  width: 100%;
`;

const PostItem = styled.div`
  background-color: #f9fafb;
  padding: 24px;
  border-radius: 12px;
  display: flex;
  flex-direction: column;
  gap: 16px;
  border-bottom: 2px solid #e5e7eb;
`;

const PostHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const PostTitle = styled.h3`
  margin: 0;
  font-size: 18px;
  font-weight: 600;
`;

const PostContent = styled.p`
  font-size: 16px;
  color: #4b5563;
  line-height: 1.5;
  margin: 0;
`;

const HeaderRight = styled.div`
  display: flex;
  align-items: center;
  gap: 16px;
`;

const PostTags = styled.div`
  display: flex;
  gap: 8px;
`;

const PostTag = styled.span`
  padding: 6px 16px;
  border: 1px solid #a558ff;
  border-radius: 25px;
  color: #a558ff;
  font-size: 14px;
  background-color: transparent;
`;

const PostActions = styled.div`
  position: relative;
`;

const MoreButton = styled.button`
  background: none;
  border: none;
  padding: 0;
  cursor: pointer;
`;

const DeleteModal = styled.div`
  position: absolute;
  top: 100%;
  right: 0;
  background-color: white;
  border-radius: 8px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
  padding: 8px;
  z-index: 1;
`;

const DeleteButton = styled.button`
  background: none;
  border: none;
  padding: 8px 16px;
  color: #ef4444;
  cursor: pointer;
  font-size: 14px;
  white-space: nowrap;

  &:hover {
    background-color: #fee2e2;
    border-radius: 4px;
  }
`;

const BlackModal = styled.div`
  width: calc(100%);
  height: calc(100vh - 120px);
  position: absolute;
  top: 120px;
  left: 0px;
  background-color: rgba(0, 0, 0, 0.4);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-end;
  padding: 41px;
  box-sizing: border-box;

  & > img {
    position: absolute;
    bottom: 0;
    right: 0;
  }
`;

const SpeechBubble = styled.div`
  background-color: white;
  padding: 30px 40px;
  border-radius: 50%;
  position: relative;
  margin-bottom: 20px;
  border: 2px solid #000;
  min-width: 300px;
  top: -300px;
  right: 120px;

  p {
    margin: 0;
    font-size: 28px;
    font-weight: 600;
    text-align: center;
    line-height: 1.5;
    color: #333;
    font-family: 'HSBombaram3.0_Regular';
    white-space: pre-line;
  }
`;

const ButtonGroup = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
  z-index: 10;
  position: relative;
  top: -2px;
  right: 20px;
`;

const DeleteConfirmMessage = styled.div`
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background-color: white;
  padding: 12px 16px;
  border-radius: 12px;
  text-align: center;
  z-index: 1001;

  p {
    margin: 0;
    font-size: 14px;
    font-weight: 600;
    line-height: 1.4;
    color: #333;
    font-family: 'HSBombaram3.0_Regular';
    white-space: pre-line;
  }
`;

