import Home from "../components/Home/Home";
import Content from "../components/Content/Content";
import Hover from "../components/Hover/Hover";

function Website() {
  return (
    <div className="no-scrollbar">
      <Home />
      <Content />
      <Hover />
    </div>
  );
}

export default Website;
