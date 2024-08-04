import React from "react";

import { useForm } from "react-hook-form";

//feedback de eventos
import { toast } from 'react-toastify';

import { Link, useHistory } from "react-router-dom";

import * as Yup from 'yup';
import { yupResolver } from "@hookform/resolvers/yup";

//UseContext hook
import { useUser } from "../../hooks/UserContext";

import LoginImag from "../../assets/login-img.svg";
import Logo from "../../assets/logo-burger.svg";
import { Button, ErrorMessage } from "../../components";

import api from "../../services/api";

import {
  Container,
  LoginImage,
  ContainerItens,
  Label,
  Input,
  SignInLink
} from "./styles";

export function Login() {
  const history = useHistory()
  const { putUseData } = useUser()

  const schema = Yup.object().shape({
    email: Yup.string().email("Digite um e-mail ou senha válida.").required("O e-mail é obrigatório"),
    password: Yup.string().required("A senha é obrigatória").min(3, "A senha deve ter no minimo 3 digítos"),
  })

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  })


  const onSubmit = async clientData => {
    const { data } = await toast.promise(
      api.post("session", {
        email: clientData.email,
        password: clientData.password
      }),
      {
        pending: 'Verificado dados',
        success: 'Seja bem-vindo(a) 👌',
        error: 'Verifique seu e-mail e senha 🤯'
      }
    );

    putUseData(data)

    setTimeout(() => {
      if (data.admin) {
        history.push("/pedidos")
      } else {
        history.push("/")
      }
    }, 2000)
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

          <Button type="submit" style={{
            marginTop: 65,
            marginBottom: 25
          }}>Sing in</Button>
        </form>
        <SignInLink>
          Não possui conta ? {" "}
          <Link style={{ color: "white" }} to="/cadastro" >Sing up</Link>
        </SignInLink>
      </ContainerItens>
    </Container>
  );
}
