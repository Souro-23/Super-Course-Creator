import React from "react";
import ImageSelector from "../AddImage/ImageSelector";
import CodeBlock from "../CodeBlock/CodeBlock";
import MarkdownEditor from "../Markdown/Markdown";
import QuizCreator from "../Quiz/QuizEditor";
import CkEditor from "../CKEditor/CkEditor";
import AddComponent from "../AddComponent/AddComponent";
import VideoPlayer from "../VideoPlayer/VideoPlayer";

export default function Editor({ subtopic, addComponent }) {
  return (
    <div>
      {subtopic.length === 0 ? (
        <AddComponent onAddComponent={addComponent} />
      ) : null}
      {subtopic.map((component, index) => {
        if (component.type === "md")
          return (
            <div key={index}>
              <MarkdownEditor component={component} index={index} />
              <AddComponent
                showMD={false}
                onAddComponent={addComponent}
                index={index}
              />
            </div>
          );
        if (component.type === "img") {
          return (
            <Wrapper key={index}>
              <ImageSelector component={component} index={index} />
              <AddComponent onAddComponent={addComponent} index={index} />
            </Wrapper>
          );
        }
        if (component.type === "quiz") {
          return (
            <div key={index}>
              <QuizCreator key={index} component={component} index={index} />
              <AddComponent onAddComponent={addComponent} index={index} />
            </div>
          );
        }
        if (component.type === "code")
          return (
            <div key={index}>
              <CodeBlock component={component} index={index} />
              <AddComponent onAddComponent={addComponent} index={index} />
            </div>
          );

        if (component.type === "ed")
          return (
            <div key={index}>
              <CkEditor component={component} index={index} />
              <AddComponent
                showCKEditor={false}
                onAddComponent={addComponent}
                index={index}
              />
            </div>
          );

        if (component.type === "video")
          return (
            <div key={index}>
              <VideoPlayer component={component} index={index} />
              <AddComponent onAddComponent={addComponent} index={index} />
            </div>
          );
      })}
    </div>
  );
}

const Wrapper = ({ children }) => {
  return <>{children}</>;
};
