import DefaultLayout from '../../../layout/DefaultLayout';
import Pagination from './component/Pagination';
import Table from './component/Table';
import Header from './component/header';

const Chatlist = () => {
  return (
    <DefaultLayout>
      <div className="container rounded-2xl mx-auto p-4 bg-white">
        <Header />

        <Table />
        <Pagination />
      </div>
    </DefaultLayout>
  );
};

export default Chatlist;
