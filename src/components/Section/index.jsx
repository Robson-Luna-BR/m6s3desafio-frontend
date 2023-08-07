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
import { DeleteUserModal } from "../DeleteUserModal";
import { useContext } from "react";
import { TechContext } from "../../providers/TechContext";

export function Section({
  
  styled,
  userData,
  showEditModal,
  createTechModal,
  deleteUserModal,
  openUserModal,
  
 
}) {
  const { setDeleteUserModal,setEditUserModal } = useContext(TechContext);
  switch (styled) {
    case "UserInfo":
      return (
        <SectionUserInfo>
          <SectionUserName>Olá, {userData.name} </SectionUserName>
          <Button
            styled="ButtonBack"
            click={() =>setEditUserModal(true)}
            text="Editar"
          ></Button>
          <Button
            styled="ButtonBack"
            click={() =>setDeleteUserModal(true)}
            text="Excluir"
          ></Button>
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
              <TechTitle>Clientes</TechTitle>
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
                    <TechName>Clente: {element.name}</TechName>
                    <TechName>Email: {element.email}</TechName>
                    <TechName>Número: {element.phoneNumber}</TechName>
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
