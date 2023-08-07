import styled from "styled-components";

export const LoginButton = styled.button`
 

  background: var(--primary);


  border: 1.2182px solid var(--primary);
  border-radius: 4px;

  :hover,
  :focus {
    background: var(--primary-Focus);
  }

  font-family: "Inter";
  font-style: normal;
  font-weight: 500;
  font-size: var(--title1);
  line-height: 21px;

  color: #ffffff;

  width: 100%;

  height: 48px;

  margin-top: 17.65px;
`;



export const RegisterPage = styled.button`
  width: 100%;
  height: 48px;
  margin-top: 22px;
  background-color: var(--grey-1);
  border: none;
  border-radius: 4px;
  font-family: "Inter";
  font-style: normal;
  font-weight: 500;
  font-size: var(--title1);
  line-height: 26px;
  color: var(--grey-0);
`;

export const ButtonBack = styled.button`
  background: var(--grey-3);
  border-radius: 4px;
  height: 40;
  width: 67px;
  border: none;
  font-family: "Inter";
  font-style: normal;
  font-weight: 600;
  font-size: 12px;
  line-height: 28px;
  

  text-align: center;

 

  color: var(--grey-0);
`;

export const ButtonRegister = styled.button`
  border-radius: 4px;
  background: var(--primary-Negative);
  width: 100%;
  height: 48px;

  :hover,
  :focus {
    background: var(--primary-Focus);
  }

  font-family: "Inter";
  font-style: normal;
  font-weight: 500;
  font-size: var(--title-1);
  line-height: 26px;
  border: none;
  outline: none;

  color: #ffffff;
`;

export const ButtonLogOut = styled.button`
  height: 32px;
  width: 55.5px;
  border: none;
  outline: none;
  font-family: "Inter";
  font-style: normal;
  font-weight: 600;
  font-size: var(--title2);
  line-height: 28px;
  border-radius: 4px;

  text-align: center;

  background-color: var(--grey-3);

  color: var(--grey-0);

  :hover,
  :focus {
    background-color: var(--grey-2);
  }
`;

export const ButtonAddTech = styled.button`
  width: 32px;
  height: 32px;
  border-radius: 4px;
  font-size: 18px;
  border: none;
  background-color: var(--grey-3);
  font-weight: bold;
  color: var(--grey-0);

  :hover,
  :focus {
    background-color: var(--grey-2);
  }
`;

export const ButtonCreateTech = styled.button`
  width: 100%;
  border-radius: 4px;
  background-color: var(--primary);
  font-family: "Inter";
  font-style: normal;
  font-weight: 500;
  font-size: 16px;
  line-height: 26px;
  height: 48px;
  margin-top: 22px;
  border: none;
  outline: none;

  :hover,
  :focus {
    background: var(--primary-Focus);
  }

  color: #ffffff;
`;

export const ButtonSaveTechChange = styled.button`
  width: 50vw;
  max-width: 204px;
  height: 48px;
  border-radius: 4px;
  border: none;
  outline: none;
  background-color: var(--primary-Negative);

  :hover,
  :focus {
    background: var(--primary-Focus);
  }

  font-family: "Inter";
  font-style: normal;
  font-weight: 500;
  font-size: 16px;
  line-height: 26px;

  color: #ffffff;
`;

export const ButtonTechDelete = styled.button`
  height: 48px;
  width: 40vw;
  max-width: 98px;
  border-radius: 4px;
  font-family: "Inter";
  font-style: normal;
  font-weight: 500;
  font-size: var(--title1);
  line-height: 26px;

  color: #ffffff;
  border: none;
  outline: none;
`;
