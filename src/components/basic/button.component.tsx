export const BUTTON_TYPE_CLASSES = {
  base: "base",
  google: "google-sign-in",
};

const getButton = (buttonType = BUTTON_TYPE_CLASSES.base) =>
  ({
    [BUTTON_TYPE_CLASSES.base]:
      "py-[8px] text-[#FFD1DC] bg-gradient-to-r from-[#191970] to-[#6A5ACD] rounded-[5px] px-[16px]",
    [BUTTON_TYPE_CLASSES.google]:
      "bg-[#4285f4] py-[8px] text-white rounded-[5px] px-[16px]",
  }[buttonType]);

const Button = ({ children, buttonType, className, ...otherProps }) => {
  const customButtonClasses = getButton(buttonType);
  return (
    <button className={customButtonClasses + " " + className} {...otherProps}>
      {children}
    </button>
  );
};

export default Button;
