import { EditModal } from "../../page/DashboardPage/style";
import { Header } from "../Header";
import { MainForm } from "../../page/DashboardPage/style";
import { useContext } from "react";
import { TechContext } from "../../providers/TechContext";
import * as yup from "yup";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { InputTitle } from "../../page/DashboardPage/style";
import Input from "../Input";
import { SelectTitle } from "../../page/DashboardPage/style";
import { SelectModal } from "../../page/DashboardPage/style";
import { ButtonAlign } from "../../page/DashboardPage/style";
import { Button } from "../Button";

export function EditUserModal() {
  const { editUserRequest, closeEditUserModal } = useContext(TechContext);

  const formSchema = yup.object().shape({
    name: yup.string(),
    email: yup.string().email(),
    password: yup.string(),
    phoneNumber: yup.string(),
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
      <EditModal>
        <Header
          styled="HeaderModal"
          click={closeEditUserModal}
          textTitle="Detalhes do Usuário"
        ></Header>
        <MainForm>
          <form onSubmit={handleSubmit(editUserRequest)}>
            <InputTitle>Nome</InputTitle>
            <Input
              // disabled={true}
              // inputValue={editTech.title}
              {...register("name")}
              placeholder="digite o novo nome de usuário"
            />
            <InputTitle></InputTitle>
            <InputTitle>Email</InputTitle>
            <Input
              // disabled={true}
              // inputValue={editTech.title}
              {...register("email")}
              placeholder="digite o novo email do usuário"
            />
            <InputTitle></InputTitle>
            <InputTitle>Senha</InputTitle>
            <Input
              // disabled={true}
              // inputValue={editTech.title}
              {...register("password")}
              placeholder="digite a nova senha do usuário"
            />

            <InputTitle></InputTitle>
            <InputTitle>Telefone</InputTitle>
            <Input
              // disabled={true}
              // inputValue={editTech.title}
              {...register("phoneNumber")}
              placeholder="digite novo telefone do usuário"
            />

            <ButtonAlign>
              <Button
                styled="ButtonSaveTechChange"
                type="submit"
                text="Salvar Alterações"
              ></Button>
            </ButtonAlign>
          </form>
        </MainForm>
      </EditModal>
    </>
  );
}
