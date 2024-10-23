import React from 'react';
import Sidebar from '@/components/Sidebar';
import Header from './Header';

const Layout = ({ children }: { children: React.ReactNode }) => {
	return (
		<div className="flex flex-col min-h-screen w-full">
			<Sidebar />
			<Header />
			<main className="sm:ml-14 flex-1 p-4">
				{children}
			</main>
		</div>
	);
};

export default Layout;
