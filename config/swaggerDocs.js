import swaggerUi from 'swagger-ui-express';
import swaggerJsdoc from 'swagger-jsdoc';

// Doc Source: https://swagger.io/specification/#info-object
const swaggerOptions = {
    swaggerDefinition: {
        info: {
            title: "CitizenAtlas",
            version: "v1.0",
            license: {
                name: "MIT",
                url: "https://opensource.org/licenses/MIT",
                $ref: './LICENSE'
            },
            contact: {
                name: "Devesh Kumar"
            },
            servers: ["http://localhost:80"]
        },
        basePath: '/',
    },
    apis: ["./index.js", "./Routes/*.js"]
}

const swaggerDocs = swaggerJsdoc(swaggerOptions);

export default (app) => {
    app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocs));
}