``` withCredentials: true```
* tells Axios to include cookies or auth credentials (like session_id cookies) when sending requests to the backend.
* so after logging in if we want to access any other apis this cookies will be send along with the request as part of the authentication
---
```
const actionMap: Record<string, () => void> = {
    Logout: handleLogout,
  };
```
* even if Logout is not in quotes js internally converts it into quotes
---