import React, { useEffect, useState } from 'react';

function PageLayout() {
  const [footerHeight, setFooterHeight] = useState(0);

  useEffect(() => {
    // Calculate the height of the footer
    const contentContainer = document.querySelector('.content-container');
    const footerHeight = window.innerHeight - contentContainer.offsetHeight;
    setFooterHeight(footerHeight);
  }, []);

  return (
    <div>
      <div className="content-container">
        {/* content goes here */}
      </div>
      <Footer style={{ height: footerHeight, position: 'fixed', bottom: 0 }} />
    </div>
  );
}

function Footer(props) {
  return <div {...props}>This is the footer</div>;
}

export default PageLayout;
