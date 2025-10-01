export const createPassword = (otp, payload) => {
  return new Promise((resolve, reject) => {
    const { password, document } = payload;

    return fetch(`${__API__}/ibusermanagement/v1/users/password`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        otp,
        password,
        document
      })
    })
      .then(resp => {
        if (resp.status >= 400) {
          reject(resp);
        }
        resolve(resp);
      })
      .catch(reject);
  });
};

export const emailPassword = email => {
  return new Promise((resolve, reject) => {
    return fetch(`${__API__}/ibusermanagement/v1/users/requestpassword`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        user: email
      })
    })
      .then(resp => {
        if (resp.status >= 400) {
          reject(resp);
        }
        resolve(resp);
      })
      .catch(reject);
  });
};
