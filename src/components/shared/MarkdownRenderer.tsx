import Markdown from "react-markdown";
import remarkGfm from "remark-gfm";

type Props = {
  content: string;
};

const MarkdownRenderer = ({content}: Props) => {
  return (
    <span className="text-sm lg:text-base leading-relaxed prose prose-neutral dark:prose-invert">
      <Markdown
        components={{
          code({node, inline, className, children}) {
            return !inline ? (
              <pre className="bg-muted !px-1 py-0.5 rounded-md inline text-muted-foreground">
                <code className={className}>{children}</code>
              </pre>
            ) : (
              <code className="bg-muted px-1 rounded">{children}</code>
            );
          },
        }}
        remarkPlugins={[remarkGfm]}
      >
        {content}
      </Markdown>
    </span>
  );
};

export default MarkdownRenderer;
