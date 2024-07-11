import ShoppingBagIcon from '@mui/icons-material/ShoppingBag';
import StorefrontIcon from '@mui/icons-material/Storefront';
import DashboardCustomizeIcon from '@mui/icons-material/DashboardCustomize';

const listLinks = [
	{
		id: 1,
		label: 'Pedidos',
		link: '/pedidos',
		icon: ShoppingBagIcon
	},
	{
		id: 2,
		label: 'Produtos',
		link: '/produtos',
		icon: StorefrontIcon
	},
	{
		id: 3,
		label: 'Adicionar Produto',
		link: '/produtos',
		icon: DashboardCustomizeIcon
	}
]

export default listLinks
