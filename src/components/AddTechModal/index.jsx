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

export function AddTechModal() {
  const { createTechRequest, closeCreateModal } = useContext(TechContext);

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
          click={closeCreateModal}
          textTitle="Cadastrar Cliente"
        ></Header>

        <MainForm>
          <form onSubmit={handleSubmit(createTechRequest)}>
            <InputTitle>Cliente</InputTitle>
            <Input
              styled="inputCreateTech"
              type="text"
              placeholder="Digite o nome do cliente"
              {...register("name")}
              error={errors.name?.message}
            />
            <Input
              styled="inputCreateTech"
              type="text"
              placeholder="Digite o email do cliente"
              {...register("email")}
              error={errors.email?.message}
            />
             <Input
              styled="inputCreateTech"
              type="text"
              placeholder="Digite o nº de contato"
              {...register("phoneNumber")}
              error={errors.phoneNumber?.message}
            />
            
           
            <Button
              styled="ButtonCreateTech"
              type="submit"
              text="Cadastrar cliente"
            ></Button>
          </form>
        </MainForm>
      </CreateModal>
    </>
  );
}
