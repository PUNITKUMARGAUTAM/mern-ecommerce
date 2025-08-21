// middleware/errorMiddleware.js
const notFound = (req, res, next) => {
  const error = new Error(`Not Found - ${req.originalUrl}`);
  res.status(404);
  next(error);
};

const errorHandler = (err, req, res, next) => {
  const statusCode = res.statusCode && res.statusCode !== 200 ? res.statusCode : 500;
  res.status(statusCode);

  const response = { message: err.message || 'Internal Server Error' };
  if (process.env.NODE_ENV !== 'production') response.stack = err.stack;

  if (err.name === 'CastError' && err.kind === 'ObjectId') {
    response.message = `Resource not found. Invalid id: ${err.value}`;
    res.status(400);
  }

  if (err.name === 'ValidationError') {
    res.status(400);
    response.errors = Object.values(err.errors).map((e) => e.message);
    response.message = 'Validation failed';
  }

  if (err.code && err.code === 11000) {
    res.status(400);
    const duplicatedFields = Object.keys(err.keyValue || {});
    response.message = `Duplicate field value entered: ${duplicatedFields.join(', ')}`;
    response.duplicate = err.keyValue;
  }

  if (err instanceof SyntaxError && err.status === 400 && 'body' in err) {
    res.status(400);
    response.message = 'Malformed JSON body in request';
  }

  if (err.name === 'MulterError' || (err.code && typeof err.code === 'string' && err.code.startsWith('LIMIT_'))) {
    res.status(400);
    response.message = err.message || 'File upload error';
    if (err.code) response.code = err.code;
  }

  return res.json(response);
};

module.exports = { notFound, errorHandler };
