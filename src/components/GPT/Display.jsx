import { Textarea, Button } from "@chakra-ui/react";
import { useToast } from "@chakra-ui/react";
import { MdOutlineContentCopy } from "react-icons/md";
import { FiExternalLink } from "react-icons/fi";
import { MdDelete } from "react-icons/md";
import { GrammarlyEditorPlugin } from "@grammarly/editor-sdk-react";
import React from "react";
import GPT from "./GPT";
import { process } from "../../../env";

function Display(props) {
  const [placeholder, setPlaceholder] = React.useState("🤖Prompt the AI.....")

  function handleChange(event) {
    props.setText(event.target.value);
  }

  const toast = useToast();
  function copyToClipboard() {
    if (props.text) {
      navigator.clipboard
        .writeText(props.text)
        .then(() => {
          toast({
            title: "Copied to Clipboard",
            position: "top-left",
            isClosable: true,
          });
        })
        .catch((error) => {
          toast({
            title: "Failed to copy to Clipboard",
            status: "error",
            position: "top-left",
            isClosable: true,
          });
        });
    } else {
      toast({
        title: "Nothing to copy",
        status: "warning",
        position: "top-left",
        isClosable: true,
      });
    }
  }

  return (
    <>
      <GrammarlyEditorPlugin clientId={process.env.CLIENT_ID}>
        <Textarea
          value={props.text}
          onChange={handleChange}
          placeholder={placeholder}
          size="sm"
          resize="none"
          borderRadius="8px"
          display={"block"}
          margin={"auto"}
          width={"80%"}
          height={"200px"}
          marginTop={"2rem"}
          color={"white"}
          backgroundColor={"#394867"}
          border={"none"}
          padding={"3rem"}
          className="focus:outline-none focus:ring focus:ring-blue-500 focus:border-0 border-8 border-blue-400 p-3 font-default"
        />
      </GrammarlyEditorPlugin>
      <div className="w-[80%] mx-auto flex justify-end mt-2">
        <Button
          colorScheme="green"
          variant="solid"
          marginRight={"4px"}
          onClick={copyToClipboard}
        >
          <a href="https://quillbot.com/" target="_blank" className="flex justify-center items-center">Rephrase <FiExternalLink className="ml-1"/></a>
        </Button>
        <Button
          colorScheme="red"
          variant="solid"
          marginRight={"4px"}
          onClick={() => {
            if(props.text === "") {
              toast({
                title: "Textarea is already Empty",
                status: "warning",
                position: "top-left",
                isClosable: true,
              })
            } else {
              props.setText("")
            }
          }}
        >
          <MdDelete />
          Clear All
        </Button>
        <Button
          colorScheme="whiteAlpha"
          variant="solid"
          onClick={copyToClipboard}
        >
          <MdOutlineContentCopy />
          Copy
        </Button>
      </div>
      <GPT setValue={props.setText} setLanguage={props.setLanguage} setPlaceholder={setPlaceholder} />
    </>
  );
}
export default Display;
