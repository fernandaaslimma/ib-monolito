import fetchHandler from "../../utils/fetchHandler";

const CreateLog = body => {
  return fetchHandler(__ERROR_LOG_URL__, {
    method: "POST",
    body: JSON.stringify(body),
    headers: new Headers({
      "Content-Type": "application/json"
    })
  });
};

export default CreateLog;
