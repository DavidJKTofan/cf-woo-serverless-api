export interface IRequest extends Request {
  params: { [key: string]: string };
  query: { [key: string]: string };
}
