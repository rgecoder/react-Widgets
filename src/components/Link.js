import React from "react";

const Link = ({ href, className, children }) => {
  const onClick = (event) => {

    if (event.metaKey || event.ctrlKey){
      return; //let browser do it's thing, do complete request/render
    }


    event.preventDefault();
    window.history.pushState({}, "", href);

    //Tells root components that the URL has just changed
    const navEvent = new PopStateEvent("popstate");
    window.dispatchEvent(navEvent);
  };
  return (
    <a onClick={onClick} className={className} href={href}>
      {children}
    </a>
  );
};

export default Link;
