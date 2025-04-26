export const TokenService = {
    saveToken(token:any) {
      sessionStorage.setItem('memoraire_token', token);
    },
    
    getToken() {
      return sessionStorage.getItem('memoraire_token');
    },
    
    clearToken() {
      sessionStorage.removeItem('memoraire_token');
    },
    
    isAuthenticated() {
      return !!this.getToken();
    }
  };