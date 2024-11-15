import React, { useEffect } from 'react'

 const GoogleReviews = () => {

    useEffect(() => {
        // Dynamically load the ElfSight script after the component mounts
        const script = document.createElement('script');
        script.src = "https://static.elfsight.com/platform/platform.js";
        script.defer = true;
        script.dataset.useServiceCore = true;
        document.body.appendChild(script);

        return () => {
          document.body.removeChild(script);
        };
      }, []);

  return (
    <>
       <div className="min-w-screen min-h-auto my-3">
        <div className="elfsight-app-46f374f3-3e68-44cf-a66c-a6822504a0ba" data-elfsight-app-lazy></div>
      </div>
      

    </>
  )
}

export default GoogleReviews;