import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form"

import { Container, Label, Input, ButtonStyles, LabelUpLoad } from "./styles";
import AddPhotoAlternateIcon from '@mui/icons-material/AddPhotoAlternate';
import api from "../../../services/api";
import ReactSelect from "react-select";


function NewProduct() {

  const [fileName, setFileName] = useState(null)
  const { register, handleSubmit } = useForm()
  const onSubmit = data => console.log(data)

  useEffect(() => {
    async function loadOrders() {
      const { data } = await api.get("products")

    };
    loadOrders()
  }, [])

  return (
    <Container>
      <form noValidate>
        <Label>Nome</Label>
        <Input type="text" {...register("name")} />

        <Label>Preço</Label>
        <Input type="number" {...register("price")} />

        <LabelUpLoad>
          {fileName || (
            <>
              <AddPhotoAlternateIcon />
              Carregue a imagem do produto
            </>
          )}
          <input type="file"
            accept="image/png, image/jpeg"
            {...register("file")}
            onChange={value => {
              setFileName(value.target.files[0]?.name)
            }}
          />
        </LabelUpLoad>

        <ReactSelect />
        <ButtonStyles >Adicionar produto</ButtonStyles>
      </form>
    </Container>
  );
}

export default NewProduct 
