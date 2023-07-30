const TokenStorage = {
  getToken() {
    let tokenString = sessionStorage.getItem('token');
    let userToken = JSON.parse(tokenString);
    return userToken?.access_token
  },
  saveToken (userToken) {
    sessionStorage.setItem('token', JSON.stringify(userToken));
  }
};

export default TokenStorage;