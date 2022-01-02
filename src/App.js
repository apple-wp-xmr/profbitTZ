import React, { useState } from 'react';

import { Form } from './Form';
import { Button } from './startButton';

function App() {
  const [startButton, setStartButton] = useState(false);
  if (startButton) {
    return <Button setStartButton={setStartButton}></Button>;
  } else {
    return <Form />;
  }
}

export default App;
