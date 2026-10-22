
import swaggerJsdoc from "swagger-jsdoc";

const options = {
  definition: {
    openapi: "3.0.0",
    info: {
      title: "Business Discovery API",
      version: "1.0.0",
      description:
        "API documentation for business discovery, database operations, CSV exports, and website audits.",
    },
    servers: [
      {
        url: "http://localhost:3000",
        description: "Local development server",
      },
    ],
  },
  apis: ["./routes/*.js", "./app.js", "./server.js"],
};

export const swaggerSpec = swaggerJsdoc(options);
