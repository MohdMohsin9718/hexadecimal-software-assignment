import axios from 'axios';
import { useEffect } from 'react';
import { useState } from 'react';
import List from '../components/List';

const HomePage = () => {
  const [list, setList] = useState();

  const API_URL = 'http://localhost:5000/api/list';

  useEffect(() => {
    const getList = async () => {
      try {
        const response = await axios.get(API_URL);
        const data = response.data;
        return setList(data);
      } catch (error) {
        return console.log(error);
      }
    };
    getList();
  }, [setList]);

  console.log(list);

  return <div className='container'>{list && <List list={list} />}</div>;
};

export default HomePage;
