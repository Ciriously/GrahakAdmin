import React from 'react';
import Imagechat from '../ui/Imagechat';

const ChatWindow = () => {
  return (
    <div className="flex flex-col h-3/4">
      {/* Chat Bubble Container */}
      <div className="overflow-auto flex-1">
        {/* Chat Bubble */}
        <ul className="space-y-5">
          {/* Chat */}
          <li className="max-w-lg flex gap-x-2 sm:gap-x-4 me-11">
            <img
              className="inline-block size-9 rounded-full"
              src="https://images.unsplash.com/photo-1541101767792-f9b2b1c4f127?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&&auto=format&fit=facearea&facepad=3&w=300&h=300&q=80"
              alt="Image Description"
            />
            <div>
              {/* Card */}
              <div className="bg-white border border-gray-200 rounded-2xl p-4 space-y-3 dark:bg-slate-900 dark:border-gray-700">
                <h2 className="font-medium text-gray-800 dark:text-white">
                  How can we help?
                </h2>
                <div className="space-y-1.5">
                  <p className="mb-1.5 text-sm text-gray-800 dark:text-white">
                    You can ask questions like:
                  </p>
                  <ul className="list-disc list-outside space-y-1.5 ps-3.5">
                    <li className="text-sm text-gray-800 dark:text-white">
                      What's Preline UI?
                    </li>
                    <li className="text-sm text-gray-800 dark:text-white">
                      How many Starter Pages &amp; Examples are there?
                    </li>
                    <li className="text-sm text-gray-800 dark:text-white">
                      Is there a PRO version?
                    </li>
                  </ul>
                </div>
              </div>

              {/* End Card */}
              <span className="mt-1.5 flex items-center gap-x-1 text-xs text-gray-500">
                <svg
                  className="flex-shrink-0 size-3"
                  xmlns="http://www.w3.org/2000/svg"
                  width={24}
                  height={24}
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth={2}
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M18 6 7 17l-5-5" />
                  <path d="m22 10-7.5 7.5L13 16" />
                </svg>
                Sent
              </span>
            </div>
          </li>
          {/* End Chat */}
          {/* Chat */}
          <li className="flex ms-auto gap-x-2 sm:gap-x-4">
            <div className="grow text-end space-y-3">
              <div className="inline-flex flex-col justify-end">
                {/* Card */}
                <div className="inline-block bg-blue-600 rounded-2xl p-4 shadow-sm">
                  <p className="text-sm text-white">what's preline ui?</p>
                </div>
                {/* End Card */}
                <span className="mt-1.5 ms-auto flex items-center gap-x-1 text-xs text-gray-500">
                  <svg
                    className="flex-shrink-0 size-3"
                    xmlns="http://www.w3.org/2000/svg"
                    width={24}
                    height={24}
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth={2}
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M18 6 7 17l-5-5" />
                    <path d="m22 10-7.5 7.5L13 16" />
                  </svg>
                  Sent
                </span>
              </div>
            </div>
            <span className="flex-shrink-0 inline-flex items-center justify-center size-[38px] rounded-full bg-gray-600">
              <span className="text-sm font-medium text-black leading-none">
                AZ
              </span>
            </span>
          </li>
          {/* End Chat */}
          {/* Chat Bubble */}
          {/* <div className="flex items-start gap-2.5">
            <img
              className="w-8 h-8 rounded-full"
              src="https://images.unsplash.com/photo-1541101767792-f9b2b1c4f127?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&&auto=format&fit=facearea&facepad=3&w=300&h=300&q=80"
              alt="Bonnie Green image"
            />
            <div className="flex flex-col gap-1">
              <div className="flex flex-col w-full max-w-[326px] leading-1.5 p-4 border-gray-200 bg-gray-100 rounded-e-xl rounded-es-xl dark:bg-gray-700">
                <div className="flex items-center space-x-2 rtl:space-x-reverse mb-2">
                  <span className="text-sm font-semibold text-gray-900 ">
                    Bonnie Green
                  </span>
                  <span className="text-sm font-normal text-gray-500 dark:text-gray-400">
                    11:46
                  </span>
                </div>
                <p className="text-sm font-normal text-gray-900 dark:text-white">
                  This is the new office &lt;3
                </p>
                <div className="group relative my-2.5">
                  <div className="absolute w-full h-full bg-gray-900/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-lg flex items-center justify-center">
                    <button
                      data-tooltip-target="download-image"
                      className="inline-flex items-center justify-center rounded-full h-10 w-10 bg-white/30 hover:bg-white/50 focus:ring-4 focus:outline-none dark:text-white focus:ring-gray-50"
                    >
                      <svg
                        className="w-5 h-5 text-white"
                        aria-hidden="true"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 16 18"
                      >
                        <path
                          stroke="currentColor"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M8 1v11m0 0 4-4m-4 4L4 8m11 4v3a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2v-3"
                        />
                      </svg>
                    </button>
                    <div
                      id="download-image"
                      role="tooltip"
                      className="absolute z-10 invisible inline-block px-3 py-2 text-sm font-medium text-white transition-opacity duration-300 bg-gray-900 rounded-lg shadow-sm opacity-0 tooltip dark:bg-gray-700"
                    >
                      Download image
                      <div className="tooltip-arrow" data-popper-arrow="" />
                    </div>
                  </div>
                  <img
                    src="https://images.unsplash.com/photo-1542291026-7eec264c27ff?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                    className="rounded-lg"
                  />
                </div>
                <span className="text-sm font-normal text-gray-500 dark:text-gray-400">
                  Delivered
                </span>
              </div>
            </div>
          </div> */}

          {/* End Chat Bubble */}
        </ul>
      </div>
      <>
        {/* Textarea */}
        <div className="relative ">
          <textarea
            id="hs-textarea-ex-1"
            className="p-4 pb-12 block w-full border-gray-200 rounded-lg text-sm  focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none dark:bg-slate-900 dark:border-gray-700 dark:text-gray-400 dark:focus:ring-gray-600"
            placeholder="Ask me anything..."
            defaultValue={''}
          />
          {/* Toolbar */}
          <div className="absolute bottom-px  inset-x-px p-2 rounded-b-md bg-white dark:bg-slate-900">
            <div className="flex justify-between items-center">
              {/* Button Group */}
              <div className="flex items-center">
                {/* Mic Button */}

                {/* End Mic Button */}
                {/* Attach Button */}
                <button
                  type="button"
                  className="inline-flex flex-shrink-0 justify-center items-center size-8 rounded-lg text-gray-500 hover:text-blue-600 focus:z-10 focus:outline-none focus:ring-2 focus:ring-blue-500 dark:hover:text-blue-500 dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600"
                >
                  <svg
                    className="flex-shrink-0 size-4"
                    xmlns="http://www.w3.org/2000/svg"
                    width={24}
                    height={24}
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth={2}
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="m21.44 11.05-9.19 9.19a6 6 0 0 1-8.49-8.49l8.57-8.57A4 4 0 1 1 18 8.84l-8.59 8.57a2 2 0 0 1-2.83-2.83l8.49-8.48" />
                  </svg>
                </button>
                {/* End Attach Button */}
              </div>
              {/* End Button Group */}
              {/* Button Group */}
              <div className="flex  items-center gap-x-1">
                {/* Mic Button */}
                <button
                  type="button"
                  className="inline-flex flex-shrink-0 justify-center items-center size-8 rounded-lg text-gray-500 hover:text-blue-600 focus:z-10 focus:outline-none focus:ring-2 focus:ring-blue-500 dark:hover:text-blue-500 dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600"
                >
                  <svg
                    className="flex-shrink-0 size-4"
                    xmlns="http://www.w3.org/2000/svg"
                    width={24}
                    height={24}
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth={2}
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M12 2a3 3 0 0 0-3 3v7a3 3 0 0 0 6 0V5a3 3 0 0 0-3-3Z" />
                    <path d="M19 10v2a7 7 0 0 1-14 0v-2" />
                    <line x1={12} x2={12} y1={19} y2={22} />
                  </svg>
                </button>
                {/* End Mic Button */}
                {/* Send Button */}
                <button
                  type="button"
                  className="inline-flex flex-shrink-0 justify-center items-center w-22 h-12 rounded-lg text-black font-medium  bg-[#FFEAD1] focus:z-10 focus:outline-none focus:ring-2 focus:ring-black dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600"
                >
                  <span className="mr-2">Send</span>{' '}
                  <svg
                    className="flex-shrink-0 size-3.5"
                    xmlns="http://www.w3.org/2000/svg"
                    width={16}
                    height={16}
                    fill="currentColor"
                    viewBox="0 0 16 16"
                  >
                    <path d="M15.964.686a.5.5 0 0 0-.65-.65L.767 5.855H.766l-.452.18a.5.5 0 0 0-.082.887l.41.26.001.002 4.995 3.178 3.178 4.995.002.002.26.41a.5.5 0 0 0 .886-.083l6-15Zm-1.833 1.89L6.637 10.07l-.215-.338a.5.5 0 0 0-.154-.154l-.338-.215 7.494-7.494 1.178-.471-.47 1.178Z" />
                  </svg>
                </button>

                {/* End Send Button */}
              </div>
              {/* End Button Group */}
            </div>
          </div>
          {/* End Toolbar */}
        </div>
        {/* End Textarea */}
      </>
    </div>
  );
};

export default ChatWindow;
