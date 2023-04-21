import { ISlateProps } from "./types";

export const Slate: React.FC<ISlateProps> = (props) => {
  const { className, children, ...rest } = props;
  return (
    <div className={`bg-primary-bg ${className}`} {...rest}>
      {children}
    </div>
  );
};
