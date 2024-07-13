import React from "react";

import Orders from "./Orders";
import { Container, ContainerItens } from "./styles";
import { SideMenuAdmin } from "../../components";
import ListProducts from "./ListProducts";

import PropTypes from "prop-types";
import paths from "../../constants/paths";

export function Admin({ match: { path } }) {

  return (
    <Container>
      <SideMenuAdmin />
      <ContainerItens>
        {path === paths.Order && <Orders />}
        {path === paths.Products && <ListProducts />}
      </ContainerItens>
    </Container>
  );
}

Admin.propTypes = {
  match: PropTypes.shape({
    path: PropTypes.string
  })
}