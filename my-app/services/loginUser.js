const loginUser = async (url, user) => {
  console.log(JSON.stringify(user));
  const response = await fetch(url, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      // Origin: 'https://enigmatic-everglades-80269.herokuapp.com',
    },
    mode: 'no-cors',
    body: JSON.stringify(user),
  });
  console.log(response);
  if (response.status === 200) {
    const result = await response.json();
    return result;
  } else {
    const error = new Error('Not correct!');
    error.status = 403;
    return error;
  }
};

export default loginUser;
