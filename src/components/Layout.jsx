"use client"
import { persistor, store } from "@/redux/store";
import { SessionProvider } from "next-auth/react";
import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";

const Layout = ({ children }) => {
      return (
            <div>
                  <SessionProvider>
                        <Provider store={store}>
                              <PersistGate loading={null} persistor={persistor}>
                                    {children}
                              </PersistGate>
                        </Provider>
                  </SessionProvider>
            </div>
      );
};

export default Layout;