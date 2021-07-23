import React from 'react';

import Counter from './components/coffe/review';

const App = () => (
  <>
    <section className="title">
      <h1>Statistics</h1>
      <Counter initial={0} />
    </section>
  </>
);
export default App;
