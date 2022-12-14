const errors = [
  {
    name: 'BadRequest',
    message: 'We could not perfom the action, please try again in some minutes',
    status: 400
  },
  {
    name: 'Unauthorized',
    message: 'You are not authorized to perform this action',
    status: 401
  },
  {
    name: 'Forbidden',
    message: 'You are not allowed to perform this action',
    status: 403
  },
  {
    name: 'NotFound',
    message: 'We could not find the resource you are looking for',
    status: 404
  },
  {
    name: 'MethodNotAllowed',
    message: 'The method you are trying to use is not allowed',
    status: 405
  },
  {
    name: 'NotAcceptable',
    message: 'The resource you are looking for is not available',
    status: 406
  },
  {
    name: 'RequestTimeout',
    message: 'The request has timed out',
    status: 408
  },
  {
    name: 'Conflict',
    message: 'The resource you are trying to access is currently in use',
    status: 409
  },
  {
    name: 'Gone',
    message: 'The resource you are looking for is no longer available',
    status: 410
  },
  {
    name: 'InternalServerError',
    message: 'We could not perfom the action, please try again in some minutes',
    status: 500
  }
]

const success = [
  {
    name: 'Created',
    message: 'The resource has been created successfully',
    status: 201
  },
  {
    name: 'Accepted',
    message: 'The request has been accepted',
    status: 202
  },
  {
    name: 'NonAuthoritativeInformation',
    message: 'The resource has been updated successfully',
    status: 203
  },
  {
    name: 'NoContent',
    message: 'The request has been processed successfully',
    status: 204
  },
  {
    name: 'ResetContent',
    message: 'The request has been processed successfully',
    status: 205
  },
  {
    name: 'PartialContent',
    message: 'The request has been processed successfully',
    status: 206
  },
  {
    name: 'MultiStatus',
    message: 'The request has been processed successfully',
    status: 304
  }
]

const errorTypes = errors.map((element) => element.status)
const successTypes = success.map((element) => element.status)

export { errors, success, errorTypes, successTypes }
