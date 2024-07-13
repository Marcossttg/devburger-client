import ShoppingBagIcon from '@mui/icons-material/ShoppingBag';
import StorefrontIcon from '@mui/icons-material/Storefront';
import DashboardCustomizeIcon from '@mui/icons-material/DashboardCustomize';
import paths from '../../constants/paths';

const listLinks = [
	{
		id: 1,
		label: 'Pedidos',
		link: paths.Order,
		icon: ShoppingBagIcon
	},
	{
		id: 2,
		label: 'Listar Produtos',
		link: paths.Products,
		icon: StorefrontIcon
	},
	{
		id: 3,
		label: 'Adicionar Produto',
		link: paths.EditProduct,
		icon: DashboardCustomizeIcon
	}
]

export default listLinks
