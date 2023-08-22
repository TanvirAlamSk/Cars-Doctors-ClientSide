import React from 'react';

const DashBoardRow = ({ order, handleDelate }) => {
    const { _id, area, image, name, price } = order



    return (
        <tr>
            <th>
                {/* 
                htmlFor="my_modal_6"
                */}
                <label>
                    <label type="submit" htmlFor={`my_model_${_id}`} className="text-white font-bold bg-red-700 rounded-full px-2 py-1" >X</label>
                </label>
                {/* ----------------------------------------------------------- */}
                <input type="checkbox" id={`my_model_${_id}`} className="modal-toggle" />
                <div className="modal">
                    <div className="modal-box">
                        <label className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2" htmlFor={`my_model_${_id}`}>✕</label>
                        <p className="py-4 text-red-500 text-lg">Are you Sure? To delete this item</p>
                        <div className="modal-action">
                            <label htmlFor={`my_model_${_id}`} onClick={() => handleDelate(_id)} className="btn  btn-warning">Conform</label>
                        </div>
                    </div>
                </div>
                {/* ----------------------------------------------------------- */}
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