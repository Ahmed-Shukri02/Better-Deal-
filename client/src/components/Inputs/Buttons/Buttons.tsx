import React, { MouseEventHandler, ReactNode, useState } from "react";
import { IButton, IDefaultButtonStyle } from "../../../common/Interfaces/Interfaces";

function DefaultButton({children, width = "auto", height = null, theme = "white", submit = false, fontColor = "lightslategray", fontSize = "1rem", styleOverride = "", handleClick = () => "", isLoading = false, testid = ""} : IButton){
  
  const baseStyle : IDefaultButtonStyle = {
    width,
    fontSize,
    color: fontColor
  }

  var myStyle : IDefaultButtonStyle
  if(!height){
    myStyle = {...baseStyle, aspectRatio: "5/1"}
  } else myStyle = {...baseStyle, height: height as string}

  const [finalStyle, setFinalStyle] = useState<IDefaultButtonStyle>(myStyle)

  var mobileBackground : string = function(){
    switch(theme){
      case "white": return "lightgray";
      case "gray": return "lightgray";
      default: return "lightgray";
    }
  }()

  
  function clickHandler(e: React.MouseEvent<HTMLButtonElement>) {
    if(!submit){
      e.preventDefault()
      handleClick()
    }
    else{
      handleClick()
    }
    (e.target as HTMLButtonElement).blur()
  }

  return (
    <button
    onClick={clickHandler}
    style = {finalStyle}
    onTouchStart={() => setFinalStyle({...myStyle, backgroundColor: mobileBackground})}
    onTouchEnd = {() => setFinalStyle({...myStyle})}
    className = {`default-${theme} ${styleOverride} `}
    disabled={isLoading}
    data-testid = {testid}
    >
      {children}
    </button>

  )
}

export default {DefaultButton}