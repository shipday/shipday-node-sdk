function processApiError(error) {
  const status = error.response.status;
  if (status === 403)
    throw new Error('authentication error');
  throw new Error('bad request');
}

module.exports = processApiError;
