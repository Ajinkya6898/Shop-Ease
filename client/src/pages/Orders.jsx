import React from "react";
import { HiOutlineClipboard } from "react-icons/hi2";
import PageHeader from "../ui-components/PageHeader";
import Alert from "../ui-components/Alert";
import { MESSAGES } from "../constant";
import Container from "../ui-components/Container";

const Orders = () => {
  return (
    <Container maxWidth="max-w-9xl">
      <PageHeader pageHeading="Your Orders" />
      <div className="flex flex-col items-center mt-10 space-y-5 text-gray-500">
        <HiOutlineClipboard className="text-6xl text-brand-500" />
        <Alert type="info" message={MESSAGES.EMPTY_ORDERS} />
      </div>
    </Container>
  );
};

export default Orders;
