import NavigationRegistrar from "@/componets/NavigationRegistrar/NavigationRegistrar";
import RouterContainer from "@/router/RouterContainer";
import { AuthProvider } from "@/context/AuthContext/AuthContext";
import { ThemesProvider } from "@/componets/Theme/Theme";
import { UserProvider } from "@/context/UserContext/UserContext";

const App = () => {
  return (
    <>
      <AuthProvider>
        <ThemesProvider>
          <UserProvider>
            <RouterContainer>
              <NavigationRegistrar />
            </RouterContainer>
          </UserProvider>
        </ThemesProvider>
      </AuthProvider>
    </>
  );
};

export default App;
