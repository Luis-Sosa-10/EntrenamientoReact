import {gql} from '@apollo/client';

export const CREAR_PERSONAJE = gql`
mutation agregarPersonaje(
  $nombre: String!
  $alias: String!
  $clasificacion: String!
  $franquicia: String!
  $habilidad: String!
  $idUsuario: ID!
) {
  addPersonaje(
    Nombre: $nombre
    Alias: $alias
    Clasificacion: $clasificacion
    Franquicia: $franquicia
    Habilidad: $habilidad
    idUsuario: $idUsuario
  ) {
    Nombre
    Alias
    Clasificacion
    Franquicia
  }
}
`;

export const EDITAR_PERSONAJE = gql`
mutation editarPersonaje(
  $id: ID!
  $nombre: String!
  $alias: String!
  $clasificacion: String!
  $franquicia: String!
  $habilidad: String!
) {
  editPersonaje(
    id: $id
    Nombre: $nombre
    Alias: $alias
    Clasificacion: $clasificacion
    Franquicia: $franquicia
    Habilidad: $habilidad
  )
}
`;

export const OBTENER_USUARIO = gql`
query Login($Correo: String!) {
  Login(Correo: $Correo) {
    id
    Nombre
    Correo
    Password
  }
}
`;
export const ELIMINARPERSONAJE = gql`
mutation eliminar(
  $id: ID!
) {
  eliminarPersonaje(
    id: $id
  )
}
`;
  export const CREAR_USUARIO = gql`
  mutation addUsuario($nombre: String!, $correo: String!, $password: String!) {
    addUsuario(Nombre: $nombre, Correo: $correo, Password: $password) {
      Nombre
    }
  }
`;

