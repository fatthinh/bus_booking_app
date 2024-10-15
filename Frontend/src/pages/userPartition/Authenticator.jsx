import React, { useState, useEffect, useRef } from "react";
import NET from "vanta/dist/vanta.net.min";
import * as THREE from "three";
import "../../Style/auth.scss";

function Authenticator({ children }) {
  const [vantaEffect, setVantaEffect] = useState(0);
  const vantaRef = useRef(null);

  // useEffect(() => {
  //   if (!vantaEffect) {
  //     setVantaEffect(
  //       NET({
  //         el: vantaRef.current,
  //         THREE: THREE,
  //         mouseControls: true,
  //         touchControls: true,
  //         gyroControls: true,
  //         minHeight: 850.0,
  //         minWidth: 250.0,
  //         scale: 1.0,
  //         scaleMobile: 1.0,
  //         color: 0xff00,
  //         backgroundColor: 0x0,
  //         points: 14.0,
  //         maxDistance: 8.0,
  //         spacing: 13.0,
  //       })
  //     );
  //   }
  //   return () => {
  //     if (vantaEffect) vantaEffect.destroy();
  //   };
  // }, [vantaEffect]);

  
  return (
    <div className="auth">
      <div className="flex justify-center items-center h-screen bg-neutral-200">
        {children}
      </div>
    </div>
  );
}

export default Authenticator;
