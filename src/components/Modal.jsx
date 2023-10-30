import {useState} from 'react';
import {Box, Layer, Button} from "grommet";

export default function Modal() {
  const [show, setShow] = useState();

  return (
    <Box>
      <Button label="show" onClick={() => setShow(true)} />

      {show && (
        <Layer
          onEsc={() => setShow(false)}
          onClickOutside={() => setShow(false)}
        >
          <Button label="close" onClick={() => setShow(false)} />
        </Layer>
      )}
    </Box>
  );
}