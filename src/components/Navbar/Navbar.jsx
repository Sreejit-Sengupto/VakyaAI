import { Button, useToast } from "@chakra-ui/react";
import { Configuration, OpenAIApi } from "openai";
import { process } from "../../../env";
import React from "react";
import Dropdown from "./Dropdown";

function Navbar(props) {
  const [loader, setLoader] = React.useState(false);

  const [target, setTarget] = React.useState("hindi");
  const configuration = new Configuration({
    apiKey: process.env.OPENAI_API_KEY,
  });
  const openai = new OpenAIApi(configuration);

  const toast = useToast()
  async function translate() {
    if(props.text) {
      setLoader(true);
      const response = await openai.createCompletion({
        model: "text-davinci-003",
        prompt: `Translate ${props.text} to ${target}`,
        max_tokens: 2000,
      });
      props.setText(response.data.choices[0].text.trim());
      setLoader(false);
    } else {
      toast({
        title: "Nothing to Translate",
        status: "warning",
        position: "top-left",
        isClosable: true,
      });
    }
  }

  return (
    <section className="flex items-center justify-between p-3">
      <div className="text-white font-default">
      <p className="text-sm">{props.text.split(/\s+/).filter((element)=>{return element.length!==0}).length} words and {props.text.length} characters</p>
      <p className="text-sm">{0.008 *  props.text.split(/\s+/).filter((element)=>{return element.length!==0}).length} Minutes read</p>
      </div>

      <div>
      <Dropdown setTarget={setTarget} />
      <Button
        isLoading={loader}
        className="w-32 ml-3 p-[8px] border-none rounded-xl text-white focus:outline-none focus:ring focus:ring-blue-300"
        backgroundColor="#2C497F"
        colorScheme="#2C497F"
        color={"white"}
        onClick={translate}
      >
        Translate
      </Button>
      </div>
    </section>
  );
}
export default Navbar;
