import { MainDashboardContainer } from "./style";
import { Header } from "../../components/Header";
import { Section } from "../../components/Section";
import { useContext } from "react";
import { UserContext } from "../../providers/UserContext";
import { TechContext } from "../../providers/TechContext";
import { AddTechModal } from "../../components/AddTechModal";
import { EditTechModal } from "../../components/EditTechModal";
import { DeleteUserModal } from "../../components/DeleteUserModal";
import { EditUserModal } from "../../components/EditUserModal";

export function DashboardPage() {
  const { userData, setUserData, navigate } = useContext(UserContext);
  const {
    editModal,
    editTech,
    createModal,
    showEditModal,
    logOut,
    createTechModal,
    deleteUserModal,
    openUserModal,
    editUserModal,
  } = useContext(TechContext);

  return (
    <>
      {userData && (
        <MainDashboardContainer>
          <Header styled="HeaderDashboard" logOut={logOut}></Header>
          <Section userData={userData} styled="UserInfo"></Section>

          <Section
            userData={userData}
            styled="TechList"
            showEditModal={showEditModal}
            createTechModal={createTechModal}
            deleteUserModal={deleteUserModal}
            openUserModal={openUserModal}
          ></Section>

          {createModal ? <AddTechModal></AddTechModal> : <> </>}
          {editModal ? <EditTechModal></EditTechModal> : <></>}
          {deleteUserModal ? <DeleteUserModal></DeleteUserModal> : <> </>}
          {editUserModal ? <EditUserModal></EditUserModal> : <> </>}
        </MainDashboardContainer>
      )}
    </>
  );
}
