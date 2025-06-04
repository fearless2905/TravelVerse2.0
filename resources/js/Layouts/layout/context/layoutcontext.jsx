import React, { useState, createContext } from "react";

export const LayoutContext = createContext({});

export const LayoutProvider = ({ children }) => {
    const defaultLayoutConfig = {
        ripple: false,
        inputStyle: "outlined",
        menuMode: "static",
        colorScheme: "light",
        theme: "tailwind-light",
        scale: 14,
    };

    const defaultLayoutState = {
        staticMenuDesktopInactive: false,
        overlayMenuActive: false,
        profileSidebarVisible: false,
        configSidebarVisible: false,
        staticMenuMobileActive: false,
        menuHoverActive: false,
    };

    const [layoutConfig, setLayoutConfig] = useState(defaultLayoutConfig);

    const [layoutState, setLayoutState] = useState(defaultLayoutState);

    const resetLayoutConfig = () => {
        setLayoutConfig(defaultLayoutConfig);
    };

    const resetLayoutState = () => {
        setLayoutState(defaultLayoutState);
    };

    const onMenuToggle = () => {
        if (isOverlay()) {
            setLayoutState((prevLayoutState) => ({
                ...prevLayoutState,
                overlayMenuActive: !prevLayoutState.overlayMenuActive,
            }));
        }

        if (isDesktop()) {
            setLayoutState((prevLayoutState) => ({
                ...prevLayoutState,
                staticMenuDesktopInactive:
                    !prevLayoutState.staticMenuDesktopInactive,
            }));
        } else {
            setLayoutState((prevLayoutState) => ({
                ...prevLayoutState,
                staticMenuMobileActive: !prevLayoutState.staticMenuMobileActive,
            }));
        }
    };

    const showProfileSidebar = () => {
        setLayoutState((prevLayoutState) => ({
            ...prevLayoutState,
            profileSidebarVisible: !prevLayoutState.profileSidebarVisible,
        }));
    };

    const isOverlay = () => {
        return layoutConfig.menuMode === "overlay";
    };

    const isDesktop = () => {
        return window.innerWidth > 991;
    };

    const value = {
        layoutConfig,
        setLayoutConfig,
        layoutState,
        setLayoutState,
        onMenuToggle,
        showProfileSidebar,
    };

    return (
        <LayoutContext.Provider value={value}>
            {children}
        </LayoutContext.Provider>
    );
};
