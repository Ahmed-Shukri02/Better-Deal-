import React from "react";
import "./header.css"

export default function Header(){
  return (
    <div className="header">
      <div className="header-container">
        <div className="header-logo">Better Deal!</div>
        <nav><ul>
          <li>Home</li>
          <li>Find</li>
          <li>Help</li>
        </ul></nav>
        <div className="header-logo">Sign up</div>
      </div>
    </div>
  )
}