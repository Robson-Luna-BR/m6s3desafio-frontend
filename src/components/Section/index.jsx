import {
  SectionUserInfo,
  SectionUserName,
  SectionUserDescription,
  SectionTechList,
  TechHeaderItemAlign,
  TechStatus,
  TechTitle,
  TechList,
  Border,
  TechName,
  ListItem,
} from "./style";
import { v4 as uuid } from "uuid";
import { Button } from "../Button";

export function Section({ styled, userData, showEditModal, createTechModal }) {
  switch (styled) {
    case "UserInfo":
      return (
        <SectionUserInfo>
          <SectionUserName>Olá, {userData.name} </SectionUserName>

          <SectionUserDescription>
            {userData.course_module}
          </SectionUserDescription>
        </SectionUserInfo>
      );

    case "TechList":
      return (
        <>
          <Border></Border>
          <SectionTechList>
            <TechHeaderItemAlign>
              <TechTitle>Cliente</TechTitle>
              <Button
                click={createTechModal}
                text="+"
                styled="ButtonAddTech"
              ></Button>
            </TechHeaderItemAlign>

            <TechList>
              {userData.client.map((element) => {
                return (
                  <ListItem key={uuid()} onClick={() => showEditModal(element)}>
                    <TechName>Clente:  {element.name}</TechName>
                    <TechName>Email:  {element.email}</TechName>
                    <TechName>Número:   {element.phoneNumber}</TechName>
                  </ListItem>
                );
              })}
            </TechList>
          </SectionTechList>
        </>
      );

    default:
      return <section></section>;
  }
}
