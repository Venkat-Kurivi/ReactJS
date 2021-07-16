import React from "react";
import { Route } from "react-router-dom";

const MainLayout = ({ props, children, ...rest }) => {

    return (
      <div id="wrapper" style={{   }}> 
        <div id="content-wrapper" className="d-flex flex-column">
          
          <div id="content">
             
            {children}
          </div>
  
              <footer
                className="sticky-footer bg-white"
                style={{ position: "static" }}>
                <div className="container my-auto">
                  <div className="copyright text-center my-auto">
                    <span style={{ color: "grey" }}>
                    Copyright © 2021 stc. All Rights Reserved.
                    </span>
                  </div>
                </div>
              </footer>
        </div>
      </div>
    );
  };

  const MainLayoutRoute = ({ component: Component, ...rest }) => {
     
    return (
      
      <Route
        {...rest}
        render={matchProps => {
  
          
         return <MainLayout> <Component {...matchProps} /> </MainLayout>
        
        }
      
      }
      />
    );
  };

  
  export default  MainLayoutRoute;