import { Footer } from "../Footer";
import { Header } from "../Header";

export const DefaultTemplate = ({ children, className, hideHeader  }) => {
  return (
    <>
      {!hideHeader && <Header />}
      <main className={className}>{children}</main>
      <Footer />
    </>
  );
};
