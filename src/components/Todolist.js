'use client';
import { removeTodo } from '@/redux/action';
import React, { use } from 'react';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux/es/exports';

const Todolist = () => {
	const [inputEvent, setInputEvent] = useState('');
	const dispatch = useDispatch();
	const selector = useSelector((state) => state.todoReducer.list);
	console.log(selector);
	return (
		<div className="flex flex-col gap-4 bg-slate-500 p-5">
			<div className="flex flex-row gap-4">
				<input
					placeholder="Enter here..."
					onChange={(e) => {
						setInputEvent(e.target.value);
					}}
					className="pl-4 p-2 border-none w-96"
					type="text"
					value={inputEvent}
					name=""
					id=""
				></input>
				<button
					onClick={() => dispatch(addTodo(inputEvent))}
					className="border-2 border-black  p-2 bg-gray-500 rounded-lg "
				>
					ADD
				</button>
			</div>
			{selector.map((item) => {
				return (
					<div
						key={item.id}
						className="flex justify-between items-center w-full"
					>
						<p className="ml-5">This is first list {item.data}</p>{' '}
						<button
							onClick={() => {
								dispatch(removeTodo(item.id));
							}}
							className="border-2 border-black  p-2 bg-gray-500 rounded-lg"
						>
							Delete
						</button>
					</div>
				);
			})}
		</div>
	);
};

export default Todolist;
