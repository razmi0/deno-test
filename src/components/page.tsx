/** @jsxImportSource npm:react@^18.3 */
/** @jsxImportSourceTypes npm:@types/react@^18.3 */

interface PageProps {
  title: string;
  description: string;
  content: string;
}

const Page: React.FC<PageProps> = ({ title, description, content }) => {
  return (
    <>
      <html lang="en">
        <head>
          <meta charSet="UTF-8" />
          <meta
            name="viewport"
            content="width=device-width, initial-scale=1.0"
          />
          <title>{title}</title>
          <meta name="description" content={description} />
        </head>
        <body>
          <h1>{title}</h1>
          <p>{description}</p>
          <div>{content}</div>
        </body>
      </html>
    </>
  );
};

export default Page;
