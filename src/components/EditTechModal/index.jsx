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

export function EditTechModal() {
  const { editTech, deleteTechRequest, editTechRequest, closeEditModal } =
    useContext(TechContext);

  const formSchema = yup.object().shape({
    name: yup.string().required("Informe o nome do cliente"),
    email: yup
      .string()
      .required("Informe o email do cliente")
      .email("informe um formato válido de email"),
      phoneNumber:yup.string().required("dado obrigatório")
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
          click={closeEditModal}
          textTitle="Detalhes do Cliente"
        ></Header>
        <MainForm>
          <form onSubmit={handleSubmit(editTechRequest)}>
            <InputTitle>Nome</InputTitle>
            <Input
              // disabled={true}
              // inputValue={editTech.title}
              {...register("name")}
              placeholder="digite o nome do cliente"
              error={errors.name?.message}
            />
            <InputTitle></InputTitle>
            <InputTitle>Email</InputTitle>
            <Input
              // disabled={true}
              // inputValue={editTech.title}
              {...register("email")}
              placeholder="digite o email do cliente"
              error={errors.email?.message}
            />
            <InputTitle></InputTitle>
            <InputTitle>Telefone</InputTitle>
            <Input
              // disabled={true}
              // inputValue={editTech.title}
              {...register("phoneNumber")}
              placeholder="digite nº do cliente"
              error={errors.phoneNumber?.message}
            />

            <ButtonAlign>
              <Button
                styled="ButtonSaveTechChange"
                type="submit"
                text="Salvar Alterações"
              ></Button>
              <Button
                styled="ButtonTechDelete "
                click={deleteTechRequest}
                text="Excluir"
              ></Button>
            </ButtonAlign>
          </form>
        </MainForm>
      </EditModal>
    </>
  );
}
