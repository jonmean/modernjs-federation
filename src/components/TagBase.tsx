import styled from '@emotion/styled';
const TagBase = (props: any) => {
  return (
    <Container>
      <p>{props.children}</p>
    </Container>
  );
};

const Container = styled.div`
  display: flex;
  flex-shrink: 0;
  align-items: center;
  height: 26px;
  width: fit-content;
  box-sizing: border-box;
  background: blue;
`;

export default TagBase;
