import React, { useEffect, useState } from "react";
import { useForm, Controller } from "react-hook-form"

import { Container, Label, Input, ButtonStyles, LabelUpLoad } from "./styles";
import AddPhotoAlternateIcon from '@mui/icons-material/AddPhotoAlternate';
import api from "../../../services/api";
import ReactSelect from "react-select";


function NewProduct() {

  const [fileName, setFileName] = useState(null)
  const [categories, seCategores] = useState([])
  const { register, handleSubmit, control } = useForm()
  const onSubmit = data => console.log(data)

  useEffect(() => {
    async function loadOrders() {
      const { data } = await api.get("categories")
      console.log(data)
      seCategores(data)
    };
    loadOrders()
  }, [])

  return (
    <Container>
      <form noValidate onSubmit={handleSubmit(onSubmit)}>
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

        <Controller name="category_id" control={control}
          render={({ field }) => {
            return (
              <ReactSelect
                {...field}
                options={categories}
                getOptionLabel={cat => cat.name}
                getOptionValue={cat => cat.id}
                placeholder="Categorias"
              />
            )
          }}
        ></Controller>

        <ButtonStyles >Adicionar produto</ButtonStyles>
      </form>
    </Container>
  );
}

export default NewProduct 
