import * as yup from "yup";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import Input from "../Input";
import { InputTextAlign } from "../../page/RegisterPage/style";
import { Label } from "../Label";
import InputRegister from "../InputRegister";
import SelectModule from "../SelectModule";
import { Button } from "../Button";

export function FormRegister({ registerFormSend }) {
  const formSchema = yup.object().shape({
    name: yup.string().required("Digite seu nome"),
    email: yup
      .string()
      .required("Informe seu email")
      .email("Digite um formato de email válido"),
    password: yup.string().required("Informe sua senha"),
    confirmPassword: yup
      .string()
      .required("Confirme sua senha")
      .oneOf(
        [yup.ref("password")],
        "Confirmação de senha deve ser igual a senha"
      ),
    phoneNumber: yup.string().required("Informe uma telefone"),
  });

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(formSchema),
  });

  return (
    <form onSubmit={handleSubmit(registerFormSend)}>
      <InputTextAlign>
        <Label htmlFor="name" text="Nome"></Label>
        <InputRegister
          id="name"
          placeholder="Digite aqui seu nome"
          type="text"
          {...register("name")}
          error={errors.name?.message}
        ></InputRegister>
      </InputTextAlign>

      <InputTextAlign>
        <Label htmlFor="email" text="Email"></Label>
        <InputRegister
          id="email"
          placeholder="Digite aqui seu email"
          type="text"
          {...register("email")}
          error={errors.email?.message}
        ></InputRegister>
      </InputTextAlign>

      <InputTextAlign>
        <Label htmlFor="password" text="Senha"></Label>
        <InputRegister
          id="password"
          placeholder="Digite aqui sua senha"
          type="password"
          {...register("password")}
          error={errors.password?.message}
        ></InputRegister>
      </InputTextAlign>

      <InputTextAlign>
        <Label htmlFor="confirmPassword" text="Confirmar Senha"></Label>
        <InputRegister
          id="confirmPassword"
          placeholder="Digite aqui sua senha"
          type="password"
          {...register("confirmPassword")}
          error={errors.confirmPassword?.message}
        ></InputRegister>
      </InputTextAlign>

      {/* <InputTextAlign>
        <Label htmlFor="bio" text="Bio">
          Bio
        </Label>
        <InputRegister
          id="bio"
          placeholder="Fale sobre você"
          type="text"
          {...register("bio")}
          error={errors.bio?.message}
        ></InputRegister>
      </InputTextAlign> */}

      <InputTextAlign>
        <Label htmlFor="phoneNumber" text="Contato"></Label>
        <InputRegister
          id="phoneNumber"
          placeholder="Número de telefone"
          type="text"
          {...register("phoneNumber")}
          error={errors.phoneNumber?.message}
        ></InputRegister>
      </InputTextAlign>

      {/* <InputTextAlign>
        <Label htmlFor="course_module" text="Módulo"></Label>
        <SelectModule
          id="course_module"
          {...register("course_module")}
        ></SelectModule>
      </InputTextAlign> */}

      <Button type="submit" styled="ButtonRegister" text="Cadastrar"></Button>
    </form>
  );
}
