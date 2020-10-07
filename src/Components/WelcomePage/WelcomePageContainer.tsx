import React from "react";
import { connect } from "react-redux";
import WelcomePage from "./WelcomePage";

const WelcomePageContainer = (props: any) => {
  const handleGameSpeedChange = (e: any) => {
    Number(e.target.value)
      ? console.log(e.target.value)
      : (e.target.value = "");
  };

  return (
    <WelcomePage handleGameSpeedChange={handleGameSpeedChange} {...props} />
  );
};
const mapStateToProps = (state: object) => ({});
export default connect(mapStateToProps, {})(WelcomePageContainer);
