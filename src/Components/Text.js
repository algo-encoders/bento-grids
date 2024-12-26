const Text = ({ title, content, classes, maxWidth = "100%" }) => {
  return (
    <div
      className={`flex flex-col gap-3 ${classes}`}
      style={{ maxWidth: maxWidth }}
    >
      <h2>{title}</h2>
      <p>{content}</p>
    </div>
  );
};

export default Text;
