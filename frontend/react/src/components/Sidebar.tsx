// import React from "react";
import { Link } from "react-router-dom";
import { HomeIcon } from "lucide-react";

const Sidebar = () => {
	return (
		<aside className="hidden sm:flex flex-col fixed inset-y-0 left-0 z-10 w-14 border-r bg-background">
			<nav className="flex flex-col items-center gap-4 px-2 sm:py-4">
				<Link
					to="/"
					className="flex h-9 w-9 items-center justify-center rounded-lg text-muted-foreground transition-colors hover:text-foreground md:h-8 md:w-8"
				>
					<HomeIcon className="h-5 w-5" />
				</Link>
			</nav>
		</aside>
	)
};

export default Sidebar;