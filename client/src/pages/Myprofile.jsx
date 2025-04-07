import React, { useState } from "react";
import PageHeader from "../ui-components/PageHeader";
import Container from "../ui-components/Container";
import Button from "../ui-components/Button";
import PageActionContainer from "../ui-components/PageActionContainer";
import UpdatePasswordSection from "../sections/UpdatePasswordSection";
import UpdateEmailSection from "../sections/UpdateEmailSection";
import UpdateMobileSection from "../sections/UpdateMobileSection";
import { scrollTo } from "../utils";

const MyProfile = () => {
  const [form, setForm] = useState({
    currentPassword: "",
    newPassword: "",
    confirmPassword: "",
    currentEmail: "",
    newEmail: "",
    currentMobile: "",
    newMobile: "",
  });

  const [error, setError] = useState("");

  function handleChange(e) {
    setForm({ ...form, [e.target.name]: e.target.value });
  }

  function handleSubmit(e) {
    e.preventDefault();

    if (form.newPassword !== form.confirmPassword) {
      setError("New password and confirm password do not match.");
      return;
    }

    if (form.newPassword.length > 0 && form.newPassword.length < 8) {
      setError("Password must be at least 8 characters long.");
      return;
    }

    setError("");
    console.log("Form submitted successfully:", form);
  }

  function handleCancel() {
    setForm({
      currentPassword: "",
      newPassword: "",
      confirmPassword: "",
      currentEmail: "",
      newEmail: "",
    });
    setError("");
  }

  return (
    <>
      <Container maxWidth="max-w-5xl" hasPageActionBar={true}>
        <PageActionContainer
          pageHeading="My Profile"
          rightContent={
            <>
              <Button
                variant="outlined"
                appearance="secondary"
                size="small"
                onClick={() => scrollTo("update-pass")}
              >
                Update Password
              </Button>
              <Button
                onClick={() => scrollTo("update-email")}
                variant="outlined"
                appearance="secondary"
                size="small"
              >
                Update Email
              </Button>
              <Button
                variant="outlined"
                appearance="secondary"
                size="small"
                onClick={() => scrollTo("update-mobile")}
              >
                Update Mobile
              </Button>
            </>
          }
        />
      </Container>
      <Container maxWidth="max-w-5xl">
        <form onSubmit={handleSubmit} className="space-y-12">
          <UpdatePasswordSection form={form} handleChange={handleChange} />
          <UpdateEmailSection form={form} handleChange={handleChange} />
          <UpdateMobileSection form={form} handleChange={handleChange} />
        </form>
      </Container>
      <Container maxWidth="max-w-5xl" className="mt-6" hasPageActionBar={true}>
        <div className="flex justify-end gap-4 px-2">
          <Button
            type="button"
            onClick={handleCancel}
            appearance="secondary"
            variant="outlined"
          >
            Cancel
          </Button>

          <Button type="submit" size="medium">
            Save Changes
          </Button>
        </div>
      </Container>
    </>
  );
};

export default MyProfile;
