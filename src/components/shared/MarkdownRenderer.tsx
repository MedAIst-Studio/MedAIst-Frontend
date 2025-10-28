import Markdown from "react-markdown";
import remarkGfm from "remark-gfm";

type Props = {
  content: string;
};

const MarkdownRenderer = ({content}: Props) => {
  return (
    <div className="text-sm lg:text-base leading-relaxed prose prose-neutral dark:prose-invert">
      <Markdown remarkPlugins={[remarkGfm]}>{content}</Markdown>
    </div>
  );
};

export default MarkdownRenderer;
