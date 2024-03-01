import React from 'react';
import { FaShoppingBag } from 'react-icons/fa';
import { BsThreeDotsVertical } from 'react-icons/bs';
import { data } from '../data/data';

//TODO:
// 1. Add a Golden Hippo Logo on the top Center
// 2. Add search back to the top left. 
// 3. Add a dropdown option for Brand & status
const orders = () => {
	return (
		<div className="bg-gray-100 min-h-screen">
			<div className="flex justify-between px-4 pt-4">
				<h2>Orders</h2>
				<h2>Welcome back, customer</h2>
			</div>
			<div className="p-4">
				<div className="w-full m-auto p-4 border rounded-lg bg-white overflow-y-auto">
					<div className="my-3 p-2 grid md:grid-cols-4 sm:grid-cols-3 grid-cols-2 items-center justify-between cursor-pointer">
						<span>Order #</span>
						<span className="sm:text-left text-right">Status</span>
						<span className="hidden md:grid">Tracking #</span>
						<span className="hidden sm:grid">Shipping Address</span>
					</div>
					<ul>
						{data.map((order, id) => (
							<li
								key={id}
								className="bg-gray-50 hover:bg-gray-100 rounded-lg my-3 p-2 grid md:grid-cols-4 sm:grid-cols-2 items-center justify-between cursor-pointer"
							>
								<div className="flex">
									<div className="bg-gray-100 p-3 rounded-lg">
										<FaShoppingBag className="text-black" /> //brandLogo
									</div>
									<div className="pl-4 ">
										<p className="text-gray-800 text-sm">
											{' '}
											{order.orderNum} 
										</p>
									</div> 
								</div>
								{/* Status column */}
								<p className="text-gray-600 sm:text-left text-right">
									<span
										className={
											order.orderStatus == 'Processing'
												? 'bg-green-200 p-2 rounded-lg'
												: order.status == 'Completed'
												? 'bg-blue-200 p-2 rounded-lg'
												: 'bg-yellow-200 p-2 rounded-lg'
										}
									>
										{order.status}
									</span>
								</p>
								{/* Date */}
								<p className="hidden md:flex">{order.trackNum}</p>
								{/* Method */}
								<div className="sm:flex hidden justify-between items-center">
									<p>{order.shipAdr}</p>
									<BsThreeDotsVertical />
								</div>
							</li>
						))}
					</ul>
				</div>
			</div>
		</div>
	);
};

export default orders;
