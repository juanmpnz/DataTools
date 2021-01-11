import React, { useState } from "react";
import { Alert, Button } from "react-bootstrap";

function AlertFunction({ message, type, key }) {
  const [show, setShow] = useState(true);

  if (show) {
    return (
      <Alert key={key} variant={type}>
        <Alert.Heading>
          <div className="alert-text">{message}</div>
        </Alert.Heading>
      </Alert>
    );
  }
}

export default AlertFunction;

/*  // eslint-disable-next-line react/jsx-props-no-spreading
  return <MuiAlert elevation={6} variant="filled" {...props} />
}

export default function AlertMassage({ message, type }) {
  const [open, setOpen] = React.useState(true)
  function handleClose(event, reason) {
    if (reason === "clickaway") {
      return
    }
    setOpen(false)
  }

  return (
    <div>
      <Snackbar
        anchorOrigin={{
          vertical: "bottom",
          horizontal: "center",
        }}
        open={open}
        autoHideDuration={6000}
        onClose={handleClose}
      >
        <Alert onClose={handleClose} severity={type}>
          {message}
        </Alert>
      </Snackbar>
    </div>


/* function AlertDismissibleExample() {
    const [show, setShow] = useState(true);
  
    if (show) {
      return (
        <Alert variant="danger" onClose={() => setShow(false)} dismissible>
          <Alert.Heading>Oh snap! You got an error!</Alert.Heading>
          <p>
            Change this and that and try again. Duis mollis, est non commodo
            luctus, nisi erat porttitor ligula, eget lacinia odio sem nec elit.
            Cras mattis consectetur purus sit amet fermentum.
          </p>
        </Alert>
      );
    }
    return <Button onClick={() => setShow(true)}>Show Alert</Button>;
  }
  
  render(<AlertDismissibleExample />); */
