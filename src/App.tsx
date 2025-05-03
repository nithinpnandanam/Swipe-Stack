import NavigationRegistrar from "@/componets/NavigationRegistrar/NavigationRegistrar";
import RouterContainer from "@/router/RouterContainer";
import { AuthProvider } from "@/context/AuthContext/AuthContext";
import { ThemesProvider } from "@/componets/Theme/Theme";

const App = () => {
  return (
    <>
      <AuthProvider>
        <ThemesProvider>
          <RouterContainer>
            <NavigationRegistrar />
          </RouterContainer>
        </ThemesProvider>
      </AuthProvider>
    </>
  );
};

export default App;
