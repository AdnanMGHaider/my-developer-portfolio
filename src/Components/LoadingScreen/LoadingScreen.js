import React from "react";
import styles from "./LoadingScreen.module.css";

const LoadingScreen = () => {
  return (
    <div className="bg-background-purple h-screen w-screen">
      <div>
        <div className="absolute left-[50%] top-[50%] -translate-x-1/2 -translate-y-1/2">
          <svg
            className="w-48 h-auto"
            fill="none"
            stroke="#ff7a5c"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="20px"
            id="Layer_2"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 2151.231 1005.261"
          >
            <g id="Layer_1-2">
              <g>
                <path
                  class="cls-1"
                  className={styles.signaturePath1}
                  d="M82.182,995.38S236.622,587.14,341.382,451.06c0,0,42.12-54,31.32,0-10.8,54-79.92,271.08-79.92,314.28s8.64,132.84,32.4,140.4,43.2-19.44,89.64-85.32,50.76-81,50.76-81c0,0-42.12,92.88-36.72,113.4,5.4,20.52,15.12,28.08,31.32,18.36s75.6-84.24,87.48-119.88,34.56-184.68,36.72-212.76,17.28-31.32,17.28-31.32c0,0,15.12,14.04,0,72.36s-43.2,168.48-43.2,205.2-1.08,69.12,14.04,78.84,56.16-37.8,74.52-55.08,81.72-2.52,96.12-1.8,70.56-4.32,90-12.24c19.44-7.92,61.92-6.48,87.12-4.32s82.08-6.48,87.84-13.68"
                />
                <path
                  class="cls-1"
                  className={styles.signaturePath2}
                  d="M1188.102,384.82s-46.08,261.12-61.92,326.4-35.28,216.12-35.28,216.12c0,0,1.2,51.24,2.64,55.8s4.8,21.6,15.12,13.44,14.88-19.92,14.88-19.92"
                />
                <path
                  class="cls-1"
                  className={styles.signaturePath3}
                  d="M1331.742,384.82s-66.96,203.181-82.08,306.97-23.04,148.43-23.04,148.43c0,0-.36,25.2,21.6,2.16s57.6-77.76,67.68-80.64,39.24,23.04,67.68,18,105.48-24.12,105.48-24.12l48.96,3.84s36.48,14.64,50.16,13.2,60-50.16,69.36-127.2,15.12-146.16,15.12-146.16c0,0,40.32-205.92,46.08-192.24s-43.2,218.16-43.2,218.16c0,0-20.16,183.6-8.64,196.56s46.8,22.32,46.8,22.32c0,0,36,12.96,56.16,6.48s132.12-17.64,153.72-12.24,60.48-18.36,60.48-18.36c0,0,50.76,4.32,70.2-12.96s97.2-117.72,90-188.28-70.56-276.12-134.28-332.28S1770.222,39.58,1620.102,19.06s-339.12-9.72-339.12-9.72c0,0-380.16,18.36-530.28,54s-349.92,79.92-465.48,157.68C169.662,298.78,2.262,432.7,6.582,509.38c4.32,76.68,22.68,102.6,65.88,122.04s240.84,34.56,461.16,15.12,281.52-2.52,373.68-9.72,456.48-43.2,456.48-43.2"
                />
              </g>
            </g>
          </svg>
        </div>
      </div>
    </div>
  );
};

export default LoadingScreen;
