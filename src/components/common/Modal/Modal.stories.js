import React from "react";
import { storiesOf } from "@storybook/react"; // eslint-disable-line
import { withInfo } from "@storybook/addon-info";

// eslint-disable-next-line import/no-named-as-default
import Modal, { MODAL_TYPES } from "./Modal";

storiesOf("common/Modal/Default", module)
  .add(
    "complete",
    withInfo()(() => (
      <Modal
        modalSettings={{
          isOpen: true,
          title: "title",
          icon: "Attention",
          description: ["Description1", "Description2"],
          onClose: () => alert("Open alert on close")
        }}
      />
    ))
  )
  .add(
    "empty modal",
    withInfo()(() => (
      <Modal
        modalSettings={{
          isOpen: true
        }}
      />
    ))
  )
  .add(
    "with title",
    withInfo()(() => (
      <Modal
        modalSettings={{
          isOpen: true,
          title: "Title"
        }}
      />
    ))
  )
  .add(
    "with icon",
    withInfo()(() => (
      <Modal
        modalSettings={{
          isOpen: true,
          icon: "Attention"
        }}
      />
    ))
  )
  .add(
    "with description",
    withInfo()(() => (
      <Modal
        modalSettings={{
          isOpen: true,
          description: "Description"
        }}
      />
    ))
  )
  .add(
    "with multiple descriptions",
    withInfo()(() => (
      <Modal
        modalSettings={{
          isOpen: true,
          description: ["Description1", "Description2"]
        }}
      />
    ))
  )

  .add(
    "with close callback",
    withInfo()(() => (
      <Modal
        modalSettings={{
          isOpen: true,
          onClose: () => alert("Open alert on close")
        }}
      />
    ))
  );

storiesOf("common/Modal/Confirmation", module).add(
  "complete",
  withInfo()(() => (
    <Modal
      modalSettings={{
        type: MODAL_TYPES.CONFIRMATION,
        isOpen: true,
        message: "Want to quit internet banking?",
        onClose: () => alert("Open alert on close")
      }}
    />
  ))
);
