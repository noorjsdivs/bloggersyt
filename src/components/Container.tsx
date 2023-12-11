interface Props {
  children: React.ReactNode;
  className?: string;
}

const Container = ({ children, className }: Props) => {
  return (
    <div className={`max-w-screen-xl mx-auto ${className}`}>{children}</div>
  );
};

export default Container;
