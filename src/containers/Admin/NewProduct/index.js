import React, { useEffect, useState } from "react";
import { useForm, Controller } from "react-hook-form"
import ReactSelect from "react-select";

import { yupResolver } from "@hookform/resolvers/yup";
import * as Yup from "yup";

import api from "../../../services/api";
import { Container, Label, Input, ButtonStyles, LabelUpLoad } from "./styles";
import { ErrorMessage } from "../../../components/";

import AddPhotoAlternateIcon from '@mui/icons-material/AddPhotoAlternate';

function NewProduct() {

  const [fileName, setFileName] = useState(null)
  const [categories, setCategories] = useState([])


  const schema = Yup.object().shape({
    name: Yup.string().required('Digite o nome do produto'),
    price: Yup.string().required('Digite o preço do produto'),
    category: Yup.object().required('Escolha uma categoria'),
    file: Yup.mixed().test('required', 'Carregue um arquivo', value => {
      console.log('required', value);
      return value !== undefined && value !== null && value.length > 0;
    })
   /* // .test('required', 'Carregue um arquivo', value => {
      //   console.log('required', value?.length > 0)
      //   return value?.length > 0
      // })
      // .test('fileSize', 'Carregue arquivo de até 2mb', value => {
      //   console.log('fileSize', value[0]?.size <= 200000)
      //   return value[0]?.size <= 200000;
      // })
      // .test('type', 'Carregue arquivo tipo JPEG ou PNG', value => {
      //   console.log('type', (value[0]?.type === 'image/jpeg') ||
      //     (value[0]?.type === 'image/png'))
      //   return (
      //     (value[0]?.type === 'image/jpeg') ||
      //     (value[0]?.type === 'image/png')
      //   )
      // })
                    // 2° validação
      // .test('required', 'Carregue um arquivo', value => {
      //   console.log('required', value && value.length > 0);
      //   return value && value.length > 0;
      // })
      // .test('fileSize', 'Carregue arquivo de até 2mb', value => {
      //   const file = value && value[0];
      //   console.log('fileSize', file && file.size <= 200000);
      //   return file && file.size <= 200000;
      // })
      // .test('type', 'Carregue arquivo tipo JPEG ou PNG', value => {
      //   const file = value && value[0];
      //   console.log('type', file && (file.type === 'image/jpeg' ||
      //     file.type === 'image/png'));
      //   return file && (file.type === 'image/jpeg' || file.type === 'image/png');
      // }) */

  })

  const {
    register,
    handleSubmit,
    control,
    formState: { errors }
  } = useForm({
    resolver: yupResolver(schema)
  })

  const onSubmit = data => console.log(data)

  useEffect(() => {
    async function loadCategories() {
      const { data } = await api.get("categories")
      console.log(data)
      setCategories(data)
    };
    loadCategories()
  }, [])

  return (
    <Container>
      <form noValidate onSubmit={handleSubmit(onSubmit)}>
        <div>
          <Label>Nome</Label>
          <Input type="text" {...register("name")} />
          <ErrorMessage>{errors.name?.message}</ErrorMessage>
        </div>

        <div>
          <Label>Preço</Label>
          <Input type="number" {...register("price")} />
          <ErrorMessage>{errors.price?.message}</ErrorMessage>
        </div>

        <div>
          <LabelUpLoad>
            {fileName || (
              <>
                <AddPhotoAlternateIcon />
                Carregue a imagem do produto
              </>
            )}
            <input type="file"
              id="image-input"
              accept="image/png, image/jpeg"
              {...register("file")}
              onChange={value => {
                setFileName(value.target.files[0]?.name)
              }}
            />
          </LabelUpLoad>
          <ErrorMessage>{errors.file?.message}</ErrorMessage>
        </div>

        <div>
          <Controller name="category" control={control}
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
          <ErrorMessage>{errors.category?.message}</ErrorMessage>

          <ButtonStyles >Adicionar produto</ButtonStyles>
        </div>

      </form>
    </Container>
  );
}

export default NewProduct
