declare module "some-untyped-package";

declare global {
  namespace Express {
    interface Request {
      user?: any;
      apiKey?:any
    }
  }
}


export {}