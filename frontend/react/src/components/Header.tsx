import {
	Breadcrumb, BreadcrumbItem, BreadcrumbLink, BreadcrumbSeparator
} from "@/components/ui/breadcrumb";
import { useLocation } from 'react-router-dom'
const Header = () => {
	const location = useLocation();
	const path = location.pathname.split('/').filter(Boolean);
	console.log(path);
	return (
		<header className="sm:ml-14 sticky top-0 flex flex-row h-12 items-center justify-between px-4 bg-background shadow">
			<div className="flex items-center gap-4">
				{
					<Breadcrumb separator={<BreadcrumbSeparator />}>
						{
							path.map((item, index) => (
								<BreadcrumbItem key={index}>
									<BreadcrumbLink href="#">{item}</BreadcrumbLink>
								</BreadcrumbItem>
							))
						}
					</Breadcrumb>
				}
			</div>
		</header>
	);
}

export default Header;