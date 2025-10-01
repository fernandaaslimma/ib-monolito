import * as contractAPI from "../../services/contracts";
import { hardRedirect } from "../../utils/redirect";
import downloadFile from "../../utils/downloadFile";
import { EN_US } from "../../utils/constants";

export default store => ({
  resetContracts: () => ({
    contracts: [],
    signedContracts: [],
    groupsInProgress: [],
    signLoadingId: null
  }),
  getUserInfo: state => {
    const { userInfo } = state;

    return {
      userInfoMail: userInfo.email
    };
  },
  getContracts: () =>
    contractAPI
      .getContracts()
      .then(resp => resp.json())
      .then(contracts => ({ contracts }))
      .catch(error => ({ error })),
  getSignedContracts: () =>
    contractAPI
      .getSignedContracts()
      .then(resp => resp.json())
      .then(signedContracts => ({ signedContracts }))
      .catch(error => ({ error })),
  getContractFile: (_, contractId) =>
    contractAPI
      .getContractFile(contractId)
      .then(resp => resp.blob())
      .then(blob => {
        downloadFile(blob, `contract-${contractId}`);
      })
      .catch(error => ({ error })),
  sign: (state, contractId, groupId) => {
    store.setState({ signLoadingId: contractId });
    return contractAPI
      .getContractSignUrl(contractId)
      .then(resp => resp.json())
      .then(resp => {
        const { userInfo } = state || {};
        hardRedirect(
          `${resp.url}&locale=${(userInfo && userInfo.preferredLanguage) ||
            EN_US}`
        );
        return resp;
      })
      .catch(err => {
        if (err.status === 409) {
          contractAPI
            .getContracts()
            .then(resp => resp.json())
            .then(contracts => {
              //TODO- refact using getContractID
              // Refact using return
              store.setState({ contracts });
              const { groupsInProgress } = store.getState();
              if (groupsInProgress === undefined) {
                store.setState({
                  groupsInProgress: [groupId],
                  signLoadingId: null
                });
              }

              store.setState({
                groupsInProgress: [...groupsInProgress, groupId],
                signLoadingId: null
              });
            });
        } else {
          return { err };
        }
      });
  },
  resetSignLoading: () => ({
    signLoadingId: null
  })
});
