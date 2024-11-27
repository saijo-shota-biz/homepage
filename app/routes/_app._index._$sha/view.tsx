import 'zenn-content-css';

type Props = {
  html: string;
};

export const View = ({ html }: Props) => {
  return (
    // biome-ignore lint/security/noDangerouslySetInnerHtml: markdown is trusted
    <div className="znc" dangerouslySetInnerHTML={{ __html: html }} />
  );
};
