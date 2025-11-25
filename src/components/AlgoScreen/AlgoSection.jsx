
import React, { useCallback, useEffect, useRef, useState } from "react";
import { useLocation, useSearchParams } from "react-router-dom";
import AnimationManager from "../../anim/AnimationMain";
import { algoMap } from "../../AlgoList";


export default function AlgoSection({ theme }) {
	// Lay tên thuật toán từ URL
	const location = useLocation();
	const algoName = location.pathname.slice(1);
	const algoDetails = algoMap[algoName];
	const canvasRef = useRef(null);
	const animBarRef = useRef(null);
	const animManagRef = useRef(null);

	// Thong tin bang pseudocode
	// Hàm highlight, unhighlight dòng pseudocode

	useEffect(() => {
		if (algoDetails) {
			const [, AlgoClass] = algoDetails;

			animManagRef.current = new AnimationManager(
				canvasRef,
				animBarRef,
			);

			const curALgo = new AlgoClass(
				animManagRef.current,
				canvasRef.current.width,
				canvasRef.current.height,
			)
		}
	 }, [algoName, algoDetails]);
	return (
    <div id="mainContent">
      <div id="algoControlSection">
        <table id="AlgorithmSpecificControls"></table>
      </div>

      <div className="viewport">
        <canvas id="canvas" ref={canvasRef} />
      </div>
      <div id="generalAnimationControlSection">
        <table id="GeneralAnimationControls" ref={animBarRef}></table>
      </div>
    </div>
  );
}