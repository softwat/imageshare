const addCookie = (name, value, exp = 5) => {
  let date = new Date();
  date.setTime(date.getTime() + exp * 24 * 60 * 60 * 1000);
  document.cookie = `${name} = ${value}; expires=${date.toUTCString()};`;
};

const getCookie = (name) => {
  let value = ";" + document.cookie;
  let parts = value.split(`; ${name}=`);

  // console.log(name);
  // console.log(value);
  // console.log(parts[1]);
  // console.log(parts.split(";")[1]);
  return parts[1];
  if (parts.length === 2) {
    return parts.pop().split(";")[1];
  }
};

const delCookie = (name) => {
  let date = new Date("1990-02-14").toUTCString();
  document.cookie = `${name}=; expires = ${date}`;
};

export { delCookie, getCookie, addCookie };
