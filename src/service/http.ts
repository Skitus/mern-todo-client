import axios from 'axios';
import { IEditPasswordUserForm, IFilterForm, ILoginForm, IRegisterForm, ITodoForm } from '../types/interfaces';

const getStatus = (isComplete: boolean, isPublic: boolean):
    string | undefined => {
  if (isComplete && isPublic) return 'completed,public';
  if (isComplete) return 'completed';
  if (isPublic) return 'public';
  return undefined;
};

class Http {
    readonly BASE_URL_TODO = 'https://mern-pet-project-todo.herokuapp.com/api/todos';

    readonly BASE_URL_AUTH = 'https://mern-pet-project-todo.herokuapp.com/api/user';

    async getAllTodos(
      _id: string,
      values: IFilterForm,
      todosCurrentPage: number,
      todosPerPage: number,
    ) {
      if (!values) {
        return await axios.get(`${this.BASE_URL_TODO}/`, {
          headers: {},
          params: {
            _id,
            page: todosCurrentPage,
            pageSize: todosPerPage,
          },
        });
      }
      if (values) {
        const status = getStatus(values.isComplete, values.isPublic);
        if (status) {
          return await axios.get(`${this.BASE_URL_TODO}/`, {
            headers: {},
            params: {
              _id,
              status,
              page: todosCurrentPage,
              pageSize: todosPerPage,
            },
          });
        }
        return await axios.get(`${this.BASE_URL_TODO}/`, {
          headers: {},
          params: {
            _id,
            search: values.search,
            page: todosCurrentPage,
            pageSize: todosPerPage,
          },
        });
      }
      return null;
    }

    async deleteTodo(_id: string) {
      return await axios.delete(`${this.BASE_URL_TODO}/delete`, { data: { _id } });
    }

    async createTodo(values: ITodoForm, _id: string) {
      return await axios.post(`${this.BASE_URL_TODO}/create`, { ...values, _id });
    }

    async editTodo(values: ITodoForm, _id: string) {
      return await axios.put(`${this.BASE_URL_TODO}/update`, { ...values, _id });
    }

    async editPasswordUser(values: IEditPasswordUserForm) {
      return await axios.put(`${this.BASE_URL_AUTH}/edit-password`, { ...values });
    }

    async registryUser(values: IRegisterForm) {
      return await axios.post(`${this.BASE_URL_AUTH}/register`, { ...values });
    }

    async loginUser(values: ILoginForm) {
      return await axios.post(`${this.BASE_URL_AUTH}/login`, { ...values });
    }
}

const http = new Http();
export default http;
