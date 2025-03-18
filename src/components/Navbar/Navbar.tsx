import React, { useEffect, useState } from "react";
import BeforeAuthNavbar from "./BeforeAuthNavbar";
import AfterAuthNavbar from "./AfterAuthNavbar";
import { supabase } from "../../client/supabaseClient";
import { Session } from "@supabase/supabase-js";

const Navbar = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  useEffect(() => {
    // Fetch the current session
    const fetchSession = async () => {
      const { data } = await supabase.auth.getSession();
      setIsAuthenticated(!!data.session); // Set auth status based on session
    };

    fetchSession();

    // Listen for authentication state changes
    const { data: authListener } = supabase.auth.onAuthStateChange(
      (_event, session: Session | null) => {
        setIsAuthenticated(!!session); // Update auth status when session changes
      }
    );

    // Cleanup the listener when the component unmounts
    return () => {
      authListener?.subscription?.unsubscribe(); // Unsubscribe to prevent memory leaks
    };
  }, []);

  return isAuthenticated ? <AfterAuthNavbar /> : <BeforeAuthNavbar />;
};

export default Navbar;
