import React, { useEffect } from 'react';
import useDeviceDetection from '../utility/DeviceDetction';
import AbbHeader from '../componets/AbbHeader';

const CodeOfConduct = () => {
  const { deviceType, isMobile } = useDeviceDetection();
  // console.log("Device type detected:", deviceType , "isMobile:", isMobile);
  useEffect(() => {
    if (isMobile) {
      if (deviceType === "Android") {
        window.location.href = "https://play.google.com/store/apps/details?id=com.abb.codeofconduct";
      } else if (deviceType === "iOS") {
        window.location.href = "https://apps.apple.com/us/app/abb-code-of-conduct/id1514401173";
      }
    }else {
     window.location.href= "https://go.insideplus.abb.com/corporate-functions/legal-and-integrity/integrity/code-of-conduct";
    }
  }, [deviceType, isMobile]);

  return (
    <>
      <AbbHeader appName="ABB Code of Conduct" />
      <div className="mid" style={{ padding: "40px", textAlign: "center" }}>
        <h1>ABB Code of Conduct App</h1>
        
        {deviceType === "Desktop" ? (
          <>
            <p>This app is available on mobile devices.</p>
            <p>Please scan the QR code or visit the links below on your mobile device:</p>
            <div style={{ marginTop: "30px" }}>
              Redirecting to Insideplus
            </div>
          </>
        ) : (
          <p>Redirecting to app store...</p>
        )}
      </div>
    </>
  );
};

export default CodeOfConduct;