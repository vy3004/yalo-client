import React, { useState } from "react";

export const AppContext = React.createContext();

export default function AppProvider({ children }) {
  const [isInfoUserModalOpen, setIsInfoUserModalOpen] = useState(false);
  const [isUpdateInfoUserModalOpen, setIsUpdateInfoUserModalOpen] =
    useState(false);
  const [isAddUserModalOpen, setIsAddUserModalOpen] = useState(false);
  const [isAddGroupModalOpen, setIsAddGroupModalOpen] = useState(false);
  const [isLogoutModalOpen, setIsLogoutModalOpen] = useState(false);

  const clearState = () => {
    setIsInfoUserModalOpen(false);
    setIsUpdateInfoUserModalOpen(false);
    setIsAddUserModalOpen(false);
    setIsAddGroupModalOpen(false);
    setIsLogoutModalOpen(false);
  };

  return (
    <AppContext.Provider
      value={{
        isInfoUserModalOpen,
        setIsInfoUserModalOpen,
        isUpdateInfoUserModalOpen,
        setIsUpdateInfoUserModalOpen,
        isAddUserModalOpen,
        setIsAddUserModalOpen,
        isAddGroupModalOpen,
        setIsAddGroupModalOpen,
        isLogoutModalOpen,
        setIsLogoutModalOpen,
        clearState,
      }}
    >
      {children}
    </AppContext.Provider>
  );
}
