import React from "react";
import UserGreeting from "./All lacture/lac_16/UserGreeting";
import Welcomevistor from "./All lacture/Lac_10/Welcomevistor";
import Bindmethod from "./All lacture/lac_14/Bindmethod";
import Propsasamethod from "./All lacture/lac_15/Propsasamethod";
import Hellojsx from "./All lacture/lac_8_jsx/Hellojsx";
import "./App.css";
import NameList from "./All lacture/lac_17/NameList";
import StyleSheet from "./All lacture/lac_20/StyleSheet";
import Inline from "./All lacture/lac_20/Inline";
import Form from "./All lacture/lac_21/Form";
import PureCom from "./All lacture/lac_26/PureCom";
import ParentComponent from "./All lacture/lac_26/ParentComponent";
import PostList from "./All lacture/lac_41/PostList";
import PostForm from "./All lacture/lac_41/PostForm";
import HookMainComponent from "./React-hook/HookMainComponent";
import SliderMain from "./react-slider/SliderMain";

function App() {
  return (
    <div className="App">
      <div className="slider--section">
        <SliderMain />
      </div>
      <div className="hook">
        <HookMainComponent />
      </div>
      <div>
        {/* lac_41:Http and React */}
        <PostForm />
        <PostList />
        {/* lac_26:Pure components */}
        {/* <PureCom /> */}
        {/* <ParentComponent /> */}
        {/* lac_21:basic of form handaling */}
        <Form />
        {/* lac_20:styling and css */}
        <StyleSheet primary={true} />
        <Inline />
        {/* lac_17:list  rendering */}
        <NameList />
        {/* lac_16:conditional rendering */}
        <UserGreeting />
        {/* lac_15:props as a method */}
        <Propsasamethod />
        {/* lac_14:bind method */}
        <Bindmethod />
        {/* lac_10 */}
        <Welcomevistor />
        {/* lac-8 */}
        <Hellojsx />
      </div>
    </div>
  );
}

export default App;
