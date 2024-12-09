import "zenn-content-css";

type Props = {
  html: string;
};

export const View = ({ html }: Props) => {
  return (
    <div className="md:px-24">
      {/* biome-ignore lint/security/noDangerouslySetInnerHtml: <explanation> */}
      <div className="znc" dangerouslySetInnerHTML={{ __html: html }} />
    </div>
  );
};
