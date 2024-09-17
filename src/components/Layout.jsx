"use client"
import { store } from "@/redux/store";
import { SessionProvider } from "next-auth/react";
import { Provider } from "react-redux";

const Layout = ({ children }) => {
      return (
            <div>
                  <SessionProvider>
                        <Provider store={store}>
                              {children}
                        </Provider>
                  </SessionProvider>
            </div>
      );
};

export default Layout;