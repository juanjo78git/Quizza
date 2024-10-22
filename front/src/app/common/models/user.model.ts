export interface User {
  id: string;
  username: string;
  mail?: string;
  avatar?: string;
  roles: string[];
  provider: string;
  token?: string;
}
