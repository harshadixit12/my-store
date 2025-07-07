import express from 'express';
import productRoutes from './routes/products.js';
import orderRoutes from './routes/orders.js';
import swaggerUi from 'swagger-ui-express';
import YAML from 'yamljs';

const app = express();
const port = 3000;

app.use(express.json());

const swaggerDocument = YAML.load('./swagger.yaml');
app.use('/docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument));

app.use('/products', productRoutes);
app.use('/orders', orderRoutes);

app.listen(port, () => {
  console.log(`Fake Store API running at http://localhost:${port}`);
});
