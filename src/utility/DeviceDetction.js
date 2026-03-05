import { useState,useEffect } from "react";

const UseDeviceDetection = () => {
    const [isMobile, setIsMobile] = useState(false);
    const [deviceType, setDeviceType] = useState("Unknown");
    
    useEffect(() => {
        const userAgent = navigator.userAgent || navigator.vendor || window.opera;
        if (/android/i.test(userAgent)) {
            setDeviceType("Android");
        } else if (/iPad|iPhone|iPod/.test(userAgent) && !window.MSStream) {
            setDeviceType("iOS");
        } else {
            setDeviceType("Desktop");
        }
        const isMobileDevice = /android|iPad|iPhone|iPod/i.test(userAgent);
        setIsMobile(isMobileDevice);
    }, []);
    return { deviceType, isMobile };
};

export default UseDeviceDetection;