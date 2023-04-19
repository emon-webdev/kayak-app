import React, { useState } from 'react';

const DemoFIlter = () => {
    const data = [
        {
            "alliance": "SA",
            "phone": "+1 888 247 2262",
            "name": "Air Canada",
        },
        {
            "alliance": "SA",
            "phone": "+91 22 27067001",
            "name": "Air India",
            "usName": null,
        },
        {
            "alliance": "SA",
            "phone": "+57 18000 953 434",
            "name": "Avianca",
            "usName": null,
        },
        {
            "alliance": "OW",
            "phone": "+91 22 27067001",
            "name": "Air India",
            "usName": null,
        },
        {
            "alliance": "ST",
            "phone": "+57 18000 953 434",
            "name": "Avianca",
            "usName": null,
        },
        {
            "alliance": "ST",
            "phone": "+91 22 27067001",
            "name": "Air India",
            "usName": null,
        },
        {
            "alliance": "ST",
            "phone": "+57 18000 953 434",
            "name": "Avianca",
            "usName": null,
        },
        {
            "alliance": "ST",
            "phone": "+91 22 27067001",
            "name": "Air India",
            "usName": null,
        },
        {
            "alliance": "OW",
            "phone": "+57 18000 953 434",
            "name": "Avianca",
            "usName": null,
        },
        { id: 1, name: 'John', age: 30, occupation: 'developer' },
        { id: 2, name: 'Mary', age: 25, occupation: 'designer' },
        { id: 3, name: 'Bob', age: 40, occupation: 'manager' },
    ];

    const [filteredData, setFilteredData] = useState([]);
    const [isChecked, setIsChecked] = useState({
      developer: false,
      designer: false,
      manager: false,
    });

    const handleCheckboxChange = (event) => {
        const { name, checked } = event.target;
        setIsChecked({ ...isChecked, [name]: checked });
    
        const checkedOccupations = Object.keys(isChecked).filter(
          (occupation) => isChecked[occupation]
        );
    
        if (checkedOccupations.length === 0) {
          setFilteredData([]);
        } else {
          const filtered = data.filter((item) =>
            checkedOccupations.includes(item.occupation)
          );
          setFilteredData(filtered);
        }
      };

    return (
        <div>
        <label>
          <input
            type="checkbox"
            name="developer"
            checked={isChecked.developer}
            onChange={handleCheckboxChange}
          />
          Developer
        </label>
        <label>
          <input
            type="checkbox"
            name="designer"
            checked={isChecked.designer}
            onChange={handleCheckboxChange}
          />
          Designer
        </label>
        <label>
          <input
            type="checkbox"
            name="manager"
            checked={isChecked.manager}
            onChange={handleCheckboxChange}
          />
          Manager
        </label>
        <ul>
          {filteredData.map((item) => (
            <li key={item.id}>{item.name}</li>
          ))}
        </ul>
      </div>
    );

};

export default DemoFIlter