import NavigationRegistrar from "@/componets/NavigationRegistrar/NavigationRegistrar";
import RouterContainer from "@/router/RouterContainer";
import { AuthProvider } from "@/context/AuthContext/AuthContext";

const App = () => {
  return (
    <>
      <AuthProvider>
        <RouterContainer>
          <NavigationRegistrar />
        </RouterContainer>
      </AuthProvider>
    </>
  );
};

export default App;
