import React from "react";

export const createContext = <T>() => React.createContext<T | null>(null);
