import React, { useState } from "react";

export const AppContext = React.createContext();

export default function AppProvider({ children }) {
  const [isInfoUserModalOpen, setIsInfoUserModalOpen] = useState(false);
  const [isInfoGroupModalOpen, setIsInfoGroupModalOpen] = useState(false);
  const [isUpdateInfoUserModalOpen, setIsUpdateInfoUserModalOpen] =
    useState(false);
  const [isAddUserModalOpen, setIsAddUserModalOpen] = useState(false);
  const [isAddGroupModalOpen, setIsAddGroupModalOpen] = useState(false);
  const [isAddMemberModalOpen, setIsAddMemberModalOpen] = useState(false);
  const [isLogoutModalOpen, setIsLogoutModalOpen] = useState(false);
  const [isLogoutChatRoomModalOpen, setIsLogoutChatRoomModalOpen] =
    useState(false);
  const [isShowChatRoomInfo, setIsShowChatRoomInfo] = useState(false);
  const [isDeleteChatHistoryModalOpen, setIsDeleteChatHistoryModalOpen] =
    useState(false);
  const [isRenameGroupModalOpen, setIsRenameGroupModalOpen] = useState(false);

  const clearState = () => {
    setIsInfoUserModalOpen(false);
    setIsInfoGroupModalOpen(false);
    setIsUpdateInfoUserModalOpen(false);
    setIsAddUserModalOpen(false);
    setIsAddGroupModalOpen(false);
    setIsAddMemberModalOpen(false);
    setIsLogoutModalOpen(false);
    setIsLogoutChatRoomModalOpen(false);
    setIsShowChatRoomInfo(false);
    setIsDeleteChatHistoryModalOpen(false);
    setIsRenameGroupModalOpen(false);
  };

  return (
    <AppContext.Provider
      value={{
        isInfoUserModalOpen,
        setIsInfoUserModalOpen,
        isInfoGroupModalOpen,
        setIsInfoGroupModalOpen,
        isUpdateInfoUserModalOpen,
        setIsUpdateInfoUserModalOpen,
        isAddUserModalOpen,
        setIsAddUserModalOpen,
        isAddGroupModalOpen,
        setIsAddGroupModalOpen,
        isAddMemberModalOpen,
        setIsAddMemberModalOpen,
        isLogoutModalOpen,
        setIsLogoutModalOpen,
        isLogoutChatRoomModalOpen,
        setIsLogoutChatRoomModalOpen,
        isShowChatRoomInfo,
        setIsShowChatRoomInfo,
        isDeleteChatHistoryModalOpen,
        setIsDeleteChatHistoryModalOpen,
        isRenameGroupModalOpen,
        setIsRenameGroupModalOpen,
        clearState,
      }}
    >
      {children}
    </AppContext.Provider>
  );
}
