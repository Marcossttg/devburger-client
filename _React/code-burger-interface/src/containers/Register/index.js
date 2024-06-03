import React from "react";

import { useForm } from "react-hook-form";
import * as Yup from 'yup';
import { yupResolver } from "@hookform/resolvers/yup";

import RegisterImg from "../../assets/register-img.svg";
import Logo from "../../assets/logo-burger.svg";
import Button from "../../components/Button";

import api from "../../services/api";

import {
  Container,
  RegisterImage,
  ContainerItens,
  Label,
  Input,
  ErrorMessage,
  SignInLink
} from "./styles"

function Register() {
  const schema = Yup.object().shape({
    name: Yup.string().required("O seu nome é obrigatório"),
    email: Yup.string().email("Digite um e-mail ou senha válida.").required("O e-mail é obrigatório"),
    password: Yup.string().required("A senha é obrigatória").min(6, "A senha deve ter no minimo 6 digítos"),
    confirmPassword: Yup.string().required("A confirme a senha").oneOf([Yup.ref("password")], "As senhas devem ser iguais")
  })

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  })


  const onSubmit = async clientData => {
    const response = await api.post("users", {
      name: clientData.name,
      email: clientData.email,
      password: clientData.password
    })
    console.log(response)
  }

  return (
    <Container>
      <RegisterImage src={RegisterImg} alt="Imagem de registro" />
      <ContainerItens>
        <img src={Logo} alt="Imagem do logo code burger" />
        <h1>Cadastre-se</h1>

        <form noValidate onSubmit={handleSubmit(onSubmit)}>

          <Label error={errors.name?.message}>Nome</Label>
          <Input type="text" {...register("name")} error={errors.name?.message} />
          <ErrorMessage>{errors.name?.message}</ErrorMessage>

          <Label error={errors.email?.message}>Email</Label>
          <Input type="email" {...register("email")} error={errors.email?.message} />
          <ErrorMessage>{errors.email?.message}</ErrorMessage>

          <Label error={errors.password?.message}>Senha</Label>
          <Input type="password" {...register("password")} error={errors.password?.message} />
          <ErrorMessage>{errors.password?.message}</ErrorMessage>

          <Label error={errors.confirmPassword?.message}>Confirmar a Senha</Label>
          <Input type="password" {...register("confirmPassword")} error={errors.confirmPassword?.message} />
          <ErrorMessage>{errors.confirmPassword?.message}</ErrorMessage>

          <Button type="submit" style={{
            marginTop: 25,
            marginBottom: 25
          }}>Sing up</Button>
        </form>
        <SignInLink>Já possui conta ? <a>Sing in</a></SignInLink>
      </ContainerItens>
    </Container>
  );
}
export default Register;
