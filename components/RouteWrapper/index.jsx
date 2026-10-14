import PropTypes from 'prop-types';
import { Helmet } from "react-helmet-async";

const RouteWrapper = ({ title, canonical, description, children }) => {
  


  return (
    <>
      <Helmet>
        <title>{title}</title>
        <meta
          name="description"
          content={description}
        />
        <link rel="canonical" href={canonical} />
      </Helmet>
      {children}
    </>
  );
};

RouteWrapper.propTypes = {
  title: PropTypes.string.isRequired,
  canonical: PropTypes.string.isRequired,
  description: PropTypes.string, 
  children: PropTypes.node,
};

export default RouteWrapper;
