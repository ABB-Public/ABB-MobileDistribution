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
              <h3>iOS</h3>
              <a 
                href="https://apps.apple.com/us/app/abb-code-of-conduct/id1514401173"
                target="_blank"
                rel="noopener noreferrer"
                style={{ fontSize: "16px", color: "#0066cc" }}
              >
                Download on the App Store
              </a>
            </div>
            <div style={{ marginTop: "20px" }}>
              <h3>Android</h3>
              <a 
                href="https://play.google.com/store/apps/details?id=com.abb.codeofconduct"
                target="_blank"
                rel="noopener noreferrer"
                style={{ fontSize: "16px", color: "#0066cc" }}
              >
                Download on Google Play
              </a>
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