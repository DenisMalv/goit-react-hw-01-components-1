import styled from "@emotion/styled";


const SectionProfile = styled.section`
  margin: 10px auto 0;
  background-color: rgb(92, 149, 255);
  width: 300px;
  border: 3px solid rgb(0, 162, 255);
  border-radius: 5px;
`;

const Description = styled.div`
  text-align: center;
  margin-bottom: 16px;
`;

const Avatar = styled.img`
  background-color: aliceblue;
  margin-top: 20px;
  width: 100px;
  border-radius: 50%;
`;

const Name = styled.p`
  font-weight: 700;
  font-size: 20px;
`;

const Tag = styled.p`
`;

const Location = styled.p`
`;

const Stats = styled.ul`
  margin: 0;
  padding: 0;
  list-style: none;
  display: flex;
  justify-content: center;
`;

const Item = styled.li`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100px;
  padding: 10px;
  border: 1px solid rgb(239, 255, 17);
  background-color: rgb(251, 255, 36);
`;

const Label = styled.span`
`;

const Quantity = styled.span`
    font-weight: 700;
`;

export { SectionProfile,Description,Avatar,Name,Tag,Location,Stats,Item,Label,Quantity }
