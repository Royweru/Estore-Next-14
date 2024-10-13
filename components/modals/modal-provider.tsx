"use client";
import React, { useState, useEffect } from "react";
import { ProductModal } from "./product-modal";

export const ModalProvider = () => {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);
  if (!isMounted) return null;
  return (
    <>
     <ProductModal />
    </>
  )
};
