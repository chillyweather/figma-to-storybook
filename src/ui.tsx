//@ts-nocheck
import "!prismjs/themes/prism.css";
import { updateGitHubFile } from "./githubPut";

import {
  Button,
  Container,
  render,
  VerticalSpace,
} from "@create-figma-plugin/ui";
import { emit, on } from "@create-figma-plugin/utilities";
import { h } from "preact";

function Plugin() {
  const containerStyle = {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    height: "100%",
  };

  async function handleButtonClick() {
    try {
      await updateGitHubFile();
    } catch (error) {
      console.log("%cui.tsx line:35 error", "color: #007acc;", error);
    }
  }

  return (
    <Container style={containerStyle} space="medium">
      <Button fullWidth onClick={() => handleButtonClick()}>
        Update Storybook
      </Button>
    </Container>
  );
}

export default render(Plugin);
