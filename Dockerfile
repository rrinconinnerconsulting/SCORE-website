# Usa una imagen base de Node.js
FROM node:20

# Establece el directorio de trabajo dentro del contenedor
WORKDIR /app

# Copia el package.json y package-lock.json para instalar dependencias
COPY package*.json ./

# Instala las dependencias
RUN npm install --only=production

# Copia el resto de la aplicación
COPY . .

# Expón el puerto en el que la aplicación expone
EXPOSE 4321

# Comando para ejecutar la aplicación
CMD ["npm", "run", "start"]