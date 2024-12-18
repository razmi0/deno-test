/** @jsxImportSource npm:react@^18.3 */
/** @jsxImportSourceTypes npm:@types/react@^18.3 */

const Button = () => <button>Click me</button>;

const MoreButton = (
  <div className="foo">
    <Button />
  </div>
);

export default MoreButton;
