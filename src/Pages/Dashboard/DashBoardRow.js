import React from 'react';

const DashBoardRow = ({ service }) => {
    const { area, image, name, price } = service
    console.log(service)
    return (
        <tr>
            <th>
                <label>
                    <input type="submit" value="X" className="text-white font-bold bg-black rounded-full w-6 h-6" />
                </label>
            </th>
            <td>
                <div className="flex items-center space-x-3">
                    <div className="avatar">
                        <div className="mask mask-squircle h-20 w-20">
                            <img src={image} className='' alt="Avatar Tailwind CSS Component" />
                        </div>
                    </div>
                </div>
            </td>
            <td>
                {name}
                <br />
                <span className="badge badge-ghost badge-sm">{area}</span>
            </td>
            <td>{price}</td>
            <th>
                <button className="btn btn-ghost btn-xs">details</button>
            </th>
        </tr>
    );
};

export default DashBoardRow;