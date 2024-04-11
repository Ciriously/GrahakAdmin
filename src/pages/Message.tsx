import Breadcrumb from '../components/Breadcrumbs/Breadcrumb';
import ChatCard from '../components/Chat/ChatCard';
import Chats from '../components/Chat/Chats';
import InActiveChat from '../components/Message/Chats/InActiveChat';
import Inbox from '../components/Message/Inbox/Inbox';
import DefaultLayout from '../layout/DefaultLayout';

const Message = () => {
  return (
    <DefaultLayout>
      <div className="mt-4 flex gap-4 md:mt-6 md:gap-6 2xl:mt-0 2xl:gap-7.5">
        <div className="w-2/5">
          <Inbox />
        </div>
        <div className="w-4/5">
          {/* <InActiveChat /> */}
          <Chats />
        </div>
      </div>
    </DefaultLayout>
  );
};

export default Message;
