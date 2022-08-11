import { useEffect, useState } from 'react';

const List = ({ list }) => {
  const [count, setCount] = useState(0);
  const [user, setUser] = useState();

  const onClick = () => {
    if (count === 9) {
      setCount(0);
    } else {
      setCount(count + 1);
    }
    setUser(list[count]);
  };

  useEffect(() => {
    setUser(list[count]);
    console.log(count);
  }, [count]);
  return (
    <>
      {user && (
        <div>
          <div className='user'>
            <div className='title'>
              <h3>Details</h3>
              <div className='list-form'>
                <p>
                  Name: <span>{user.name}</span>
                </p>
                <p>
                  Username: <span>{user.username}</span>{' '}
                </p>
                <p>
                  Email: <span>{user.email}</span>{' '}
                </p>
              </div>
            </div>
            <div className='title'>
              <h3>Address</h3>
              <div className='list-form'>
                <p>
                  {' '}
                  Street: <span>{user.address.street}</span>
                </p>
                <p>
                  {' '}
                  Suite: <span>{user.address.suite}</span>
                </p>
                <p>
                  {' '}
                  City: <span>{user.address.city}</span>
                </p>
                <h3>Geo</h3>
                <div className='list-form'>
                  <p>
                    Latitude: <span>{user.address.geo.lat}</span>
                  </p>
                  <p>
                    Longitude: <span>{user.address.geo.lng}</span>
                  </p>
                </div>
              </div>
            </div>
            <div className='title'>
              <h3>Contact</h3>
              <div className='list-form'>
                <p>
                  Phone: <span>{user.phone}</span>
                </p>
                <p>
                  Website: <span>{user.website}</span>
                </p>
              </div>
            </div>
            <div className='title'>
              <h3>Company</h3>
              <div className='list-form'>
                <p>
                  Name: <span>{user.company.name}</span>
                </p>
                <p>
                  Catch Phrase: <span>{user.company.catchPhrase}</span>
                </p>
                <p>
                  Business: <span>{user.company.bs}</span>
                </p>
              </div>
            </div>
          </div>
          <button onClick={onClick}>Next User</button>
        </div>
      )}
    </>
  );
};

export default List;
