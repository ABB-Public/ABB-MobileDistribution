import UseDeviceDetection from "../utility/DeviceDetction";
import { useEffect } from "react";

const Closer = () => {
    const { deviceType, isMobile } = UseDeviceDetection();
    useEffect(() => {
        if (isMobile) {
            if (deviceType === "Android") {
                window.location.href = "https://play.google.com/store/apps/details?id=com.abb.noddack";
            } else if (deviceType === "iOS" || deviceType === "iPad" || deviceType === "iPhone" || deviceType === "iPod") {
                
                const isIOS = deviceType === "iOS" || deviceType === "iPad" || deviceType === "iPhone" || deviceType === "iPod";
                console.log("Device type detected:", deviceType , "isMobile:", isMobile , "isIOS:", isIOS);
                const url = isIOS
                ? "itms-apps://apps.apple.com/us/app/abb-closer/id1560948190"
                : "https://apps.apple.com/us/app/abb-closer/id1560948190";

                window.location.href = url;
            }else if (deviceType === "Huawei") {
                window.location.href = "https://appgallery.huawei.com/#/app/C103202337";
            }

        }else{
                window.location.href = "https://new.abb.com/medium-voltage/service/technical-support-and-repairs/closer";
            }
    }, [deviceType, isMobile]);

    return (
        <>
            <h1 style={{ textAlign: "center", marginTop: "50px" }}>Redirecting to app store...</h1>
        </>
    );
}

export default Closer;