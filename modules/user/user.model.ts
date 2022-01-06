import axios from 'axios';

interface UserModelInterface {

}

class UserModel implements UserModelInterface {
  public async get(): Promise<any> {
    return await axios.get('/api/user/info')
      .then((res) => res.data)
      .then((data) => (data as any).user)
  }
}

export { UserModel };
