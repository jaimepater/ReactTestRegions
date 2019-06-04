/*
 * HomePage
 *
 * This is the first thing users see of our App, at the '/' route
 *
 */

import React from 'react';
import { compose } from 'redux';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import { useInjectReducer } from 'utils/injectReducer';
import { Container } from '@bootstrap-styled/v4';

import FileLoader from './FileLoader';
import RegionsTable from './RegionsTable';
import { LEVELS } from './constants';
import { setFiles } from './actions';
import reducer from './reducer';

const key = 'regions';

function mapStateToProps(state) {
  return {
    home: state,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    onSetFiles: evt => dispatch(setFiles(evt)),
  };
}

const withConnect = connect(
  mapStateToProps,
  mapDispatchToProps,
);

function HomePage(props) {
  console.log(props);
  useInjectReducer({ key, reducer });

  const getInformationForLevel = level => {
    const data = props.home.regions;
    return data
      .filter(row => row.length === level + 1 && row[level])
      .map(row => {
        const parentValue =
          level - 1 < 0 ? { code: '-', description: '-' } : row[level - 1];
        return {
          ...row[level],
          parentCode: parentValue.code,
          parentDescription: parentValue.description,
        };
      });
  };
  return (
    <section>
      <Container>
        <FileLoader {...props} />
        {props.home.regions && props.home.regions.length ? (
          <div>
            <RegionsTable
              data={getInformationForLevel(LEVELS.dep.level)}
              caption={LEVELS.dep.label}
            />
            <RegionsTable
              data={getInformationForLevel(LEVELS.pro.level)}
              caption={LEVELS.pro.label}
            />
            <RegionsTable
              data={getInformationForLevel(LEVELS.dis.level)}
              caption={LEVELS.dis.label}
            />
          </div>
        ) : (
          <div />
        )}
      </Container>
    </section>
  );
}

HomePage.propTypes = {
  home: PropTypes.object,
};

export default compose(withConnect)(HomePage);
