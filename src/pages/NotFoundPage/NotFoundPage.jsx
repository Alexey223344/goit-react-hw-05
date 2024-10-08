import { NavLink } from 'react-router-dom';


const NotFoundPage = () => {
  return (
    <div>
      <h2>Sorry, no such page exists</h2>
      <NavLink to='/'>
        Home
      </NavLink>
    </div>
  );
};
export default NotFoundPage;