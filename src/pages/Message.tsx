import Breadcrumb from '../components/Breadcrumbs/Breadcrumb';
import InActiveChat from '../components/Message/Chats/InActiveChat';
import Inbox from '../components/Message/Inbox/Inbox';
import DefaultLayout from '../layout/DefaultLayout';

const Message = () => {
  return (
    <DefaultLayout>
      <div className="mt-4 flex gap-4 md:mt-6 md:gap-6 2xl:mt-7.5 2xl:gap-7.5">
        <div className="w-1/3">
          <Inbox />
        </div>
        <div className="w-4/5">
          <InActiveChat />
        </div>
      </div>
    </DefaultLayout>
  );
};

export default Message;
