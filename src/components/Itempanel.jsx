import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import PageTitle from "./PageTitle";
import Item from "./Item";
import Additem from "./Additem";
import { fetchGetItemsData } from "./../redux/slices/apiSlice";

const Itempanel = ({ pageTitle }) => {
  const authData = useSelector((state) => state.auth.authData);
  const userKey = authData?.sub;
  const dispatch = useDispatch();
  // console.log(userKey);

  const getTasksData = useSelector((state) => state.apis.getItemsData);
  console.log(getTasksData);

  useEffect(() => {
    if (!userKey) return;

    const fetchGetItems = async () => {
      try {
        await dispatch(fetchGetItemsData(userKey)).unwrap();
      } catch (error) {
        console.error("Failek to Fetch Items: ", error);
      }
    };

    fetchGetItems();
  }, [dispatch, userKey]);
  return (
    <div className="panel bg[#212121] w-4/5 h-full rounded-md border border-gray-500 py-5 px-4 overflow-y-auto">
      {userKey ? (
        <div className="panel-wraper w-full h-full">
          <PageTitle title={pageTitle} />
          <div className="items flex flex-wrap">
            <Item />
            <Additem />
          </div>
        </div>
      ) : (
        <div className="w-full h-full flex items-center justify-center">
          <button className="flex justify-center items-center bg-gray-300 text-gray-900 py-2 px-4 rounded-md cursor-default">
            <span className="text-sm font-semibold">
              로그인이 필요한 서비스 입니다.
            </span>
          </button>
        </div>
      )}
    </div>
  );
};

export default Itempanel;
