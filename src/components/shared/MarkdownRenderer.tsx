import Markdown from "react-markdown";
import remarkGfm from "remark-gfm";

type Props = {
  content: string;
};

const MarkdownRenderer = ({content}: Props) => {
  return (
    <span className="text-sm lg:text-base leading-relaxed prose prose-neutral dark:prose-invert">
      <Markdown remarkPlugins={[remarkGfm]}>{content}</Markdown>
    </span>
  );
};

export default MarkdownRenderer;
