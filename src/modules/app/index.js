import React from 'react';
import {TableContainer} from '../table/index.js';
import {FormBaseContainer} from '../formBase/index.js';

export class AppContainer extends React.Component {
  render() {
    return (
      <main>
        <section>
            <TableContainer/>
        </section>
        <section>
            <FormBaseContainer/>
        </section>
      </main>
    );
  };
};
