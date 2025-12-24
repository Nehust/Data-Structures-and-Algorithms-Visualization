import "../../css/AlgoScreen.css";
import "../../css/App.css";

import React, { useEffect, useRef } from "react";
import { useLocation, useSearchParams } from "react-router-dom";
import AnimationManager from "../../anim/AnimationMain";
import { algoMap } from "../../AlgoList";

const AlgoSection = ({ theme }) => {
  const [searchParams] = useSearchParams();

  const location = useLocation();
  const algoName = location.pathname.slice(1);
  const algoDetails = algoMap[algoName];

  const canvasRef = useRef(null);
  const animBarRef = useRef(null);
  const animManagRef = useRef(null);
  const initializedRef = useRef(false);

  // Handle page view and animation setup
  useEffect(() => {
    if (!algoDetails || initializedRef.current) {
      return;
    }

    initializedRef.current = true;

    const [_menuDisplayName, AlgoClass, _hasPseudoCode, _verboseDisplayName] =
      algoDetails;

    // Tạo đối tượng animation
    const animManager = new AnimationManager(canvasRef, animBarRef);
    animManagRef.current = animManager;
    // Tạo đối tượng Thuật toán
    const curAlgo = new AlgoClass(
      animManager,
      canvasRef.current.width,
      canvasRef.current.height
    );
    if (searchParams.toString()) {
      try {
        curAlgo.setURLData(searchParams);
      } catch (error) {
        console.error(error);
      }
    }

    const updateDimensions = () => {
      animManager.changeSize(
        canvasRef.current.clientWidth,
        canvasRef.current.clientHeight
      );
    };

    window.addEventListener("resize", updateDimensions);

    updateDimensions();

    return () => {
      window.removeEventListener("resize", updateDimensions);
    };
  }, [algoName, algoDetails, searchParams]);

  if (!algoDetails) {
    return <div>Algorithm not found</div>;
  }

  return (
    <div id="mainContent">
      <div id="algoControlSection">
        <table id="AlgorithmSpecificControls"></table>
      </div>

      <div className="viewport">
        <canvas id="canvas" ref={canvasRef}></canvas>
      </div>

      <div id="generalAnimationControlSection">
        <table id="GeneralAnimationControls" ref={animBarRef}></table>
      </div>
    </div>
  );
};

export default AlgoSection;
