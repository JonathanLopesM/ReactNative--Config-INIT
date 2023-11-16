
export interface IUser {
  id?: number;
  email?: string;
  name?: String,
  token?: string;
  username?: string;

}

export interface IContext extends IUser {
  authenticated: boolean

}

export interface IAuthContext{
  children: JSX.Element;
}