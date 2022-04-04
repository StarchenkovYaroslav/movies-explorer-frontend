import {useEffect, useState} from "react";

import {moviesAmount, pageWidths} from "../config";

export function useCheckPageWidth() {
  const [initialMoviesAmount, setInitialMoviesAmount] = useState(0);
  const [addedMoviesAmount, setAddedMoviesAmount] = useState(0);

  function checkPageWidth() {
    const pageWidth = document.documentElement.clientWidth;

    if (pageWidth > pageWidths.maxWidthOfMiddlePage) {
      setInitialMoviesAmount(moviesAmount.bigPageInitial);
      setAddedMoviesAmount(moviesAmount.bigPageAdded);
    } else if(pageWidth > pageWidths.maxWidthOfSmallPage) {
      setInitialMoviesAmount(moviesAmount.middlePageInitial);
      setAddedMoviesAmount(moviesAmount.middlePageAdded);
    } else {
      setInitialMoviesAmount(moviesAmount.smallPageInitial);
      setAddedMoviesAmount(moviesAmount.smallPageAdded);
    }
  }

  useEffect(() => {
    checkPageWidth()
  }, [])

  useEffect(() => {
    function postponeCheckPageWidth() {
      setTimeout(checkPageWidth, 2000);
    }

    window.addEventListener('resize', postponeCheckPageWidth);

    return () => {
      window.removeEventListener('resize', postponeCheckPageWidth);
    }
  }, [])

  return {
    initialMoviesAmount,
    setInitialMoviesAmount,
    addedMoviesAmount,
    setAddedMoviesAmount
  }
}