enum StatusCodes {
  OK = 200,
  CREATED = 201,
  ACCEPTED = 202,
  SUCCESS_NO_CONTENT = 204,
  BAD_REQUEST = 400,
  UNAUTHORIZED = 401,
  FORBIDDEN = 403,
  NOT_FOUND = 404,
  SEMANTIC_ERROR = 422,
  SERVER_ERROR = 500,
}

interface IServiceResponse<T> {
  code: StatusCodes,
  data?: T,
  error?: string,
}

interface IService<T> {
  create(obj: T):Promise<IServiceResponse<T>>,
  read(): Promise<IServiceResponse<T[]>>,
}

export default IService;