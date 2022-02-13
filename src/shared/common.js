const loginInCheck = (id) => {
  let reg = /^[A-Za-z0-9]{3,8}$/;
  return reg.test(id);
};

const emailCheck = (email) => {
  let reg =
    /^[0-9a-zA-Z]([-_.0-9a-zA-Z])*@[-_.0-9a-zA-Z]([-_.0-9a-zA-Z])*.([a-zA-Z])*/;
  return reg.test(email);
};

const pwdCheck = (pwd) => {
  let reg = /^[A-Za-z0-9]{4,8}$/;
  return reg.test(pwd);
};

export { emailCheck, loginInCheck, pwdCheck };
