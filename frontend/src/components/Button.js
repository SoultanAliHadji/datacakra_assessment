export const Button = (props) => {
  return (
    <button
      className={
        "drop-shadow-md hover:bg-[#bf7324] font-medium px-3 py-1 rounded " +
        props.moreStyles
      }
      onClick={props.onClick}
    >
      {props.title}
    </button>
  );
};
