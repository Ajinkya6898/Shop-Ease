import React from "react";
import Alert from "../ui-components/Alert";
import Container from "../ui-components/Container";

const Wishlist = () => {
  return (
    <>
      <Container>
        <Alert type="info" message="You don't have anything in your wishlist" />
      </Container>
    </>
  );
};

export default Wishlist;
