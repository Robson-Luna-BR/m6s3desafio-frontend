import { CreateModal } from "../../page/DashboardPage/style";
import { useContext } from "react";
import { TechContext } from "../../providers/TechContext";
import { Header } from "../Header";
import { MainForm } from "../../page/DashboardPage/style";
import * as yup from "yup";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { InputTitle } from "../../page/DashboardPage/style";
import Input from "../Input";
import { SelectTitle } from "../../page/DashboardPage/style";
import { SelectModal } from "../../page/DashboardPage/style";
import { Button } from "../Button";

export function DeleteUserModal() {
  const { deleteUserRequest, closeDeleteModal } = useContext(TechContext);

  const formSchema = yup.object().shape({
    
    name: yup.string().required("Informe o nome do cliente"),
    email: yup.string().required("Informe o nome do cliente").email("Digite um formato de email válido"),
    phoneNumber: yup.string().required("Informe o telefone do cliente"),
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(formSchema),
  });

  return (
    <>
    
      <CreateModal>
        <Header
          styled="HeaderModal"
          click={closeDeleteModal}
          textTitle="Deletar Usuário"
        ></Header>

        <MainForm>
          <form onSubmit={handleSubmit(deleteUserRequest)}>
            <InputTitle>Tem certeza que quer deletar esse usuário? </InputTitle>
         
            
           
            <Button
              styled="ButtonCreateTech"
              type="submit"
              text="Deletar usuário"
              onClick={deleteUserRequest}
            ></Button>
          </form>
        </MainForm>
      </CreateModal>
    </>
  );
}