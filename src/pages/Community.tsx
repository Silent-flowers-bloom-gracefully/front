import { useState } from "react";
import styled from "styled-components";
// import Header from "../components/Header";
import WriteButton from "../components/button/WriteButton";

type Post = {
  id: number;
  title: string;
  content: string;
  tags: string[];
};

const posts: Post[] = [
  {
    id: 3,
    title: "아니 근데 마라탕을 먹었다니까???",
    content: "sdfsdfdfsdf",
    tags: ["건강"],
  },
];

const allTags = Array.from(new Set(posts.flatMap(post => post.tags)));

export default function Community() {
  const [selectedTag, setSelectedTag] = useState<string | null>(null);

  const filteredPosts = selectedTag
    ? posts.filter(post => post.tags.includes(selectedTag))
    : posts;

  return (
    <Container>
      <MainBox>
        {/* <Header /> */}

        <ContentWrapper>
          <TagList>
    
            {allTags.map(tag => (
              <TagButton
                key={tag}
                selected={selectedTag === tag}
                onClick={() =>
                  setSelectedTag(tag === selectedTag ? null : tag)
                }
              >
                {tag}
              </TagButton>
            ))}
          </TagList>

          <PostList>
            {filteredPosts.length === 0 ? (
              <EmptyText>해당 태그의 글이 없습니다.</EmptyText>
            ) : (
              filteredPosts.map(post => (
                <PostItem key={post.id}>
                  <Postbox>
                    <PostTitle>{post.title}</PostTitle>
                    <PostContent>{post.content}</PostContent>
                  </Postbox>
                  <PostTags>
                    {post.tags.map(tag => (
                      <PostTagscontent key={tag}>{tag} </PostTagscontent>
                    ))}
                  </PostTags>
                </PostItem>
              ))
            )}
          </PostList>
        </ContentWrapper>
      </MainBox>
    </Container>
  );
}

const Container = styled.div`
  width: 100%;
  height: 100vh;
  background-color: #ffffff;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const MainBox = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 788px;
  height: 100%;
  border-style: solid;
  border-color: #e3e3e3;
  border-width: 0px 1px;
`;

const ContentWrapper = styled.div`
  margin-top: 130px;
  width: 100%;
  padding: 0 32px;
  display: flex;
  flex-direction: column;
  gap: 24px;
`;

const TagList = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 12px;
`;

const TagButton = styled.button<{ selected: boolean }>`
  width: 100px;
  height: 44px;
  padding: 6px 12px;
  border-radius: 22px;
  font-size: 20px;
  border: 1px solid ${({ selected }) => (selected ? "#A558FF" : "#A0A0A0")};
  background-color: #fff;
  color: ${({ selected }) => (selected ? "#A558FF" : "#A0A0A0")};
  cursor: pointer;
  transition: all 0.2s;
`;

const PostList = styled.div`
  display: flex;
  flex-direction: column;
`;

const Postbox = styled.div`
  display: flex;
  flex-direction: column;
`

const PostItem = styled.div`
  border-bottom: 1px solid #A0A0A0;
  margin: 15px;
  padding: 15px;
  display: flex;
  justify-content: space-between;
`;

const PostTitle = styled.p`
  font-size: 20px;
  font-weight: 500;
`;

const PostContent = styled.p`
  font-size: 20px;
  color: #000;
  margin:4px 0px 20px 0px;
  line-height: 1.2;
  font-weight: 400;
  width: 580px;
`;

const PostTags = styled.div`
  width: 68px;
  height: 30px;
  border-radius: 17px;
  border: 1px solid #A558FF;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const PostTagscontent = styled.p`
  font-size: 12px;
  color: #A558FF;
`

const EmptyText = styled.div`
  font-size: 14px;
  color: #aaa;
`;