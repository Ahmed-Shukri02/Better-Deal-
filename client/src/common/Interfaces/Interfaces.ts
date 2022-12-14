import React, {ReactNode} from "react"
// CONTEXTS
export interface IMediaContext{
  isMobile?: boolean | undefined,
  isTablet?: boolean | undefined
}


//

// BUTTONS

export interface IButton{
  children: ReactNode,
  isLoading?: boolean,
  width?: string,
  height?: string | null,
  testid?: string,
  theme?: string,
  submit?: boolean,
  fontColor?: string,
  fontSize? : string
  styleOverride?: string,
  handleClick?: Function,
}

export interface IDefaultButtonStyle{
  width: string,
  height?: string,
  aspectRatio?: string,
  fontSize: string,
  color: string
  backgroundColor?: string
}

//
