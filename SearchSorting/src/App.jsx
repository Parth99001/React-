import React, { useState, useEffect } from "react";
import axios from "axios";

const App = () => {
  const [users, setUsers] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");
  const [filterAge, setFilterAge] = useState("");
  const [loading, setLoading] = useState();
  const [error, setError] = useState("");

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get("http://localhost:3000/user");
        setUsers(response.data);
        setLoading(false);
      } catch (error) {
        setError("Failed to fetch data.");
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  const handleSearchChange = (event) => {
    setSearchQuery(event.target.value);
  };

  const handleFilterAgeChange = (event) => {
    setFilterAge(event.target.value);
  };

  const filteredUsers = users
    .filter((user) =>
      user.name.toLowerCase().includes(searchQuery.toLowerCase())
    )
    .filter((user) => {
      if (!filterAge) return true;
      return user.age === parseInt(filterAge);
    });

  return (
    <div className="App" style={{ backgroundColor: 'black', color: 'white', padding: '20px', borderRadius:'20px',textAlign:'center',gap:'10PX', marginRight
      :"10px"
    }}>
      <h1> <span style={{color:'red'}}>U</span>ser Search & Filter</h1>

      <div>
        <input
          type="text"
          placeholder="Search by name"
          value={searchQuery}
          onChange={handleSearchChange}
          style={{ padding: '10px', marginBottom: '20px', borderRadius: '5px' }}
        />
      </div>
      <div>
        <select onChange={handleFilterAgeChange} value={filterAge} style={{ padding: '10px', marginBottom: '20px', borderRadius: '5px' }}>
          
          <option value="">All Ages</option>
          <option value="21">21</option>
          <option value="22">22</option>
          <option value="23">23</option>
          <option value="24">24</option>
          <option value="25">25</option>
          <option value="26">26</option>
          <option value="27">27</option>
          <option value="28">28</option>
          <option value="29">29</option>
          <option value="30">30</option>
          <option value="31">31</option>
          <option value="32">32</option>
          <option value="33">33</option>
          <option value="34">34</option>
          <option value="35">35</option>
          <option value="36">36</option>
          <option value="38">38</option>
          <option value="40">40</option>
        </select>
      </div>

      {loading && <div>Loading...</div>}
      {error && <div>{error}</div>}

      <div>
        <ul style={{ listStyleType: 'none', paddingLeft: '0' }}>
          {filteredUsers.length === 0 ? (
            <li>No users found</li>
          ) : (
            filteredUsers.map((user) => (
              <li key={user.id} style={{ marginBottom: '10px'  }}>
                {user.name}, Age : {user.age}
              </li>
            ))
          )}
        </ul>
      </div>
    </div>
  );
};

export default App;
