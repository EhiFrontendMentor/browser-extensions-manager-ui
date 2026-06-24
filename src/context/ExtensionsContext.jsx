import { useState, createContext, useEffect } from "react";
import { sel } from '../js/custom.js';

export const ExtensionsContext = createContext();

export function ExtensionsProvider({ children }) {
  const [extensions, setExtensions] = useState([]);
  const [pageTheme, setPageTheme] = useState(localStorage.getItem('pageTheme') || 'light-mode');

  let addExtension = (ext) => {};
  let removeExtension = (ext) => {};
  let setExtensionState = (extName) => {
    setExtensions((prev) =>
      prev.map((ext) =>
        ext.name == extName ? { ...ext, isActive: !ext.isActive } : ext
      )
    );
  };

  useEffect(() => {
    function updatePageTheme() {
      sel('#root').setAttribute('data-theme', pageTheme);
      localStorage.setItem('pageTheme', pageTheme);
    }

    updatePageTheme();
  },[pageTheme])

  return <ExtensionsContext.Provider
    value={{
      extensions,
      setExtensions,
      addExtension,
      removeExtension,
      setExtensionState,
      setPageTheme
    }}
  >
    {children}
  </ExtensionsContext.Provider>;
}

