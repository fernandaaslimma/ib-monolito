/* eslint-disable react/display-name */
import React, { useEffect, useState } from "react";
import {
  ACTION_TYPE_APPROVE_SUITABILITY,
  SUITABILITY_NOTIFICATION_TYPE
} from "../../../utils/constants";
import { MODAL_TYPES } from "../../common/Modal/Modal";
import { rem } from "../../../styles/tools";
import { redirect } from "../../../utils/redirect";
import SuitabilityForm from "../SuitabilityForm";
import Welcome from "../Welcome";
import ErrorBoundary from "../../ErrorBoundary";
import { Container } from "../../../styles/grid";
import mfaActionsCheck from "../../../utils/mfaActionsCheck";

const SuitabilityModal = ({
  openModal = () => {},
  getAuthFactors = () => {},
  setNotificationStatus = () => {},
  authFactors,
  notification,
  error
}) => {
  const [modalOpen, setModalOpen] = useState(false);

  const showForm = async () => {
    const validAuthFactors = await mfaActionsCheck(
      ACTION_TYPE_APPROVE_SUITABILITY,
      authFactors
    );
    if (validAuthFactors.result === true) {
      showModal();
    } else {
      setNotificationStatus(SUITABILITY_NOTIFICATION_TYPE);
      redirect("/mfaboarding");
    }
  };

  const showModal = () => {
    const suitabilityNotification =
      notification &&
      notification.find(item => item.type === SUITABILITY_NOTIFICATION_TYPE);

    openModal({
      type: MODAL_TYPES.PAGE_AS_MODAL,
      width: rem(1100),
      children: () => {
        if (!suitabilityNotification) {
          return <SuitabilityForm />;
        }
        return <Welcome />;
      }
    });
  };

  useEffect(() => {
    getAuthFactors();
  }, []);

  useEffect(() => {
    if (authFactors && !modalOpen) {
      setModalOpen(true);
      showForm();
    }
  }, [authFactors]);

  return (
    <ErrorBoundary error={error}>
      <Container />
    </ErrorBoundary>
  );
};

export default SuitabilityModal;
