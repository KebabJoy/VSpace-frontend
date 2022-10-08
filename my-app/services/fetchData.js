const fetchData = async (url, user) => {
  const response = await fetch(url, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    mode: 'no-cors',
    body: JSON.stringify(user),
  });

  if (response.status === 200) {
    const result = await response.json();
    return result;
  } else {
    const error = new Error('Not correct!');
    error.status = 403;
    throw error;
  }
};

export default fetchData;
