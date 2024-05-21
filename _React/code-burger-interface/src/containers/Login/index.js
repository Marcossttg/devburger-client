import React from "react";

import { useForm } from "react-hook-form";
import * as Yup from 'yup';
import { yupResolver } from "@hookform/resolvers/yup";

import LoginImag from "../../assets/login-img.svg";
import Logo from "../../assets/logo-burger.svg";

import api from "../../services/api";

import {
  Container,
  LoginImage,
  ContainerItens,
  Label,
  Input,
  ErrorMessage,
  Button,
  SignInLink
} from "./styles"

function Login() {
  const schema = Yup.object().shape({
    email: Yup.string().email("Digite um e-mail ou senha válida").required("O e-mail é obrigatório"),
    password: Yup.string().required("A senha é obrigatória").min(6, "A senha deve ter no minimo 6 digítos"),
  })

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  })


  const onSubmit = async clientData => {
    const response = await api.post("sessions", {
      email: clientData.email,
      password: clientData.password
    })
    // console.log(response)
  }

  return (
    <Container>
      <LoginImage src={LoginImag} alt="Imagem de login" />
      <ContainerItens>
        <img src={Logo} alt="Imagem do logo code burger" />
        <h1>Login</h1>

        <form noValidate onSubmit={handleSubmit(onSubmit)}>

          <Label>Email</Label>
          <Input type="email" {...register("email")} error={errors.email?.message} />
          <ErrorMessage>{errors.email?.message}</ErrorMessage>

          <Label>Senha</Label>
          <Input type="password" {...register("password")} error={errors.password?.message} />
          <ErrorMessage>{errors.password?.message}</ErrorMessage>

          <Button type="submit">Sing in</Button>
        </form>
        <SignInLink>Não possui conta ? <a>Sing up</a></SignInLink>
      </ContainerItens>
    </Container>
  );
}
export default Login;
