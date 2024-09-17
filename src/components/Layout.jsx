"use client"
import { SessionProvider } from "next-auth/react";

const Layout = ({ children }) => {
      return (
            <div>
                  <SessionProvider>
                        {children}
                  </SessionProvider>
            </div>
      );
};

export default Layout;