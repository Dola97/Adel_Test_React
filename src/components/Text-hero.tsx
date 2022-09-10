import { HERO_Section } from "../constants/index";
import { Button } from "./button";
import "./header.css";
export const TextHero = () => {
  return (
    <>
      <p className="fText">Listen, Learn, Guide</p>
      <p className="sText">
        Realise your goals {"\n"}
        <span>And live </span>as you wish
      </p>
      <p className="tText">{HERO_Section}</p>
      <Button
        border={"none"}
        color={"#CF0303"}
        type="button"
        height={"66px"}
        children={<p className="buttontxt">Find out who they are</p>}
        radius={"50px"}
        width={"226px"}
        className={"button"}
      />
    </>
  );
};
