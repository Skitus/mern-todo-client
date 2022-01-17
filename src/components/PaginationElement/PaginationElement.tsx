import React, { useEffect } from 'react';
import Pagination from '@mui/material/Pagination';
import { useDispatch, useSelector } from 'react-redux';
import { listOfTodosSelector, pagesCountSelector } from '../../bll/listOfTodos/listOfTodos.selector';
import { fetchTodos, setCurrentPage } from '../../bll/listOfTodos/listOfTodos.slice';
import { loginUserSelector } from '../../bll/loginUser/loginUser.selector';

function PaginationElement() {
  const dispatch = useDispatch();
  const { todosCurrentPage, todosPerPage } = useSelector(listOfTodosSelector);
  const pagesCount = useSelector(pagesCountSelector);
  const { userId } = useSelector(loginUserSelector);

  useEffect(() => {
    dispatch(fetchTodos({ userId, todosCurrentPage, todosPerPage }));
  }, [todosCurrentPage, todosPerPage]);

  const handlePaginator = (num: number) => {
    dispatch(setCurrentPage(num));
  };

  return (
    pagesCount >= 2 ? (
      <Pagination
        defaultPage={todosCurrentPage}
        count={pagesCount}
        color="primary"
        onChange={(_, num) => {
          handlePaginator(num);
        }}
      />
    ) : null
  );
}

export default PaginationElement;
