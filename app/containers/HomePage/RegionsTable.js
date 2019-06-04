import React from 'react';
import PropTypes from 'prop-types';
import { Table, Thead, Tr, Tbody, Td, H3 } from '@bootstrap-styled/v4';

const Row = ({ code, description, parentDescription, parentCode }) => (
  <Tr>
    <Td> {code} </Td>
    <Td>{description} </Td>
    <Td>{parentCode} </Td>
    <Td>{parentDescription} </Td>
  </Tr>
);

Row.propTypes = {
  code: PropTypes.string,
  description: PropTypes.string,
  parentDescription: PropTypes.string,
  parentCode: PropTypes.string,
};

const RegionsTable = ({ data, caption }) => (
  <Table striped>
    <caption>
      <H3>{caption}</H3>
    </caption>
    <Thead>
      <Tr>
        <Td>Codigo</Td>
        <Td>Descripcion</Td>
        <Td>Codigo padre</Td>
        <Td>Descripcionpadre</Td>
      </Tr>
    </Thead>
    <Tbody>
      {data.map((row, id) => (
        <Row key={id} {...row} />
      ))}
    </Tbody>
  </Table>
);

RegionsTable.propTypes = {
  data: PropTypes.array,
  caption: PropTypes.string,
};

export default RegionsTable;
