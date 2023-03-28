module.exports = (error, request, response, next) => {
  console.log(error);
  const code = error.code;

  const errorValidation = {
    11000: `this entered name already exists please choose another`,
  };

  if (response.headersSent) return next(error);

  if (errorValidation[code])
    return response.status(400).json(errorValidation[code]);

  return response.status(500).end();
};
