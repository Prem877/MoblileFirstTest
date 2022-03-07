 
   
  // remove the token and user from the session storage
  export const removeUserSession = () => {
    sessionStorage.removeItem('isAuthenticated');
   }
   
  // set useId to session storage

  export const setUserId = (isAuthenticated) =>{
      sessionStorage.setItem("isAuthenticated",isAuthenticated);
  }

  // return the use id from the session storage

  export const getUserId = () =>{
      return sessionStorage.getItem('isAuthenticated');
  }