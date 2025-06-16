import MovieList from '../../components/movieList';
import TheatreTable from '../../components/theatreTable';
import { Tabs } from 'antd';

const Admin = () => {
  const items = [
    {
      key: '1',
      label: 'Movies',
      children: <MovieList />,
    },
    {
      key: '2',
      label: 'Theatres',
      children: <TheatreTable />,
    },
  ];
  return (
    <div>
      <h3>Admin page</h3>
      <Tabs defaultActiveKey='1' items={items} />
    </div>
  );
};

export default Admin;
