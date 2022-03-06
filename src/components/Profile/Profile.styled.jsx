import styled from "@emotion/styled";

export const SectionProfile = styled.section`
  margin: 10px auto 0;
  background-color: rgb(92, 149, 255);
  width: 300px;
  border: 3px solid rgb(0, 162, 255);
  border-radius: 5px;
`;

export const Description = styled.div`
  text-align: center;
  margin-bottom: 16px;
`;

export const Avatar = styled.img`
  background-color: aliceblue;
  margin-top: 20px;
  width: 100px;
  border-radius: 50%;
`;

export const Name = styled.p`
  font-weight: 700;
  font-size: 20px;
`;

export const Tag = styled.p`
`;

export const Location = styled.p`
`;

export const Stats = styled.ul`
  margin: 0;
  padding: 0;
  list-style: none;
  display: flex;
  justify-content: center;
`;

export const Item = styled.li`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100px;
  padding: 10px;
  border: 1px solid rgb(239, 255, 17);
  background-color: rgb(251, 255, 36);
`;

export const Label = styled.span`
`;

export const Quantity = styled.span`
    font-weight: 700;
`;
