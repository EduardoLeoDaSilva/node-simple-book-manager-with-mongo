import bookRoutes from "./bookRoutes.js";
import authorRoutes from "./authorRoutes.js";


const initiateRoutes = (server) => {
	server.use(bookRoutes);
	server.use(authorRoutes);
};

export default initiateRoutes;