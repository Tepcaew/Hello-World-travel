import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getUsers } from "../../features/applicationSlice";

const BookingTour = () => {
  const users = useSelector((state) => state.application.users);

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getUsers());
  }, [dispatch]);
  return (
    <div>
      {users.map((user) => {
        return user.tours.map((tour) => {
          return (
            <div >
              {!tour.confirmed && (
                <div >
                  <div>{user.login}</div>
                  <div>{tour.tour.name}</div>
                  <div>{tour.date}</div>
                  {tour.confirmed ? (
                    <div>Подтверждено</div>
                  ) : (
                    <div>Ожидает подтверждения</div>
                  )}
                </div>
              )}
            </div>
          );
        });
      })}
    </div>
  );
};

export default BookingTour;
