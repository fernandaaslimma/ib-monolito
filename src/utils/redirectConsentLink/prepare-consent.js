// const request = require("supertest");
// const payloadCreateShare = require("./payloadOpenBankingCreateShare.json");
// const payloadLinkToRedirect = require("./payloadOpenBankingCreateLinkToRedirect.json");

// const baseURLBBM = "https://api.dev.bocombbm.com.br";

// async function createShare() {
//   const response = await request(baseURLBBM)
//     .post("/open-banking/journey-tpp/v2/shares")
//     .set(
//       "Authorization",
//       'Token "MGZhYTdmOTYtZmRjMy0zNWU5LWFlZWMtN2E0MGVkNmMwMjdiOjQyYjQxOWI3LTU1NjctM2Q0Mi04ZjNkLTdjNjQ2NWQzNWJmNw=='
//     )
//     .send(payloadCreateShare);

//   return response.body;
// }

async function createLinkToRedirect() {
  // const { shareId } = await createShare();
  // const response = await request(baseURLBBM)
  //   .patch(`/open-banking/journey-tpp/v1/shares/${shareId}`)
  //   .set("Content-type", "application/json")
  //   .send(payloadLinkToRedirect);
  // const redirectUri = response.body.redirect_uri;
  // const url = `/${redirectUri.slice(redirectUri.indexOf("?"))}`;
  // const slicedParameters = url.split("&");
  // const scope = slicedParameters[1];
  // const intent_id = `intent_id=${scope.slice(scope.indexOf("urn:"))}`;
  // const redirect_uri = slicedParameters[5];
  // const state = slicedParameters[4];
  // const finalURI = `/?${scope}&${intent_id}&${redirect_uri}&${state}`;
}

createLinkToRedirect();
