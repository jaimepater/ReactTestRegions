import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Form, FormGroup, H1, Input } from '@bootstrap-styled/v4';

import { DELIMITATIONS } from './constants';
import { convertTextToArray } from '../../utils/dataConvert';

class FileLoader extends Component {
  fileRead;

  handleFileRead = () => {
    const ArrayValues = convertTextToArray(
      this.fileRead.result,
      DELIMITATIONS.columnDelimiter,
      this.extractCodeName,
    );
    this.props.onSetFiles(ArrayValues);
  };

  handleFileSelector = file => {
    this.fileRead = new FileReader();
    this.fileRead.onloadend = this.handleFileRead;
    if (file instanceof Blob) {
      this.fileRead.readAsText(file);
    }
  };

  extractCodeName = row =>
    row
      .map(cell => {
        const infoRegion = cell.split(DELIMITATIONS.codeDelimiter);
        return infoRegion.length === 3
          ? { code: infoRegion[1], description: infoRegion[2].trim() }
          : null;
      })
      .filter(line => line != null);

  render() {
    return (
      <div className="mt-3">
        <H1>Tabla por Regiones</H1>
        <Form>
          <FormGroup>
            <Input
              type="file"
              id="file"
              size="sm"
              onChange={e => this.handleFileSelector(e.target.files[0])}
            />
          </FormGroup>
        </Form>
      </div>
    );
  }
}

FileLoader.propTypes = {
  onSetFiles: PropTypes.func,
};

export default FileLoader;
